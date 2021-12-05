import React, { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { getDatabase, ref, onValue, set } from "firebase/database";
import homeStyles from "./homeStyles";

const Home = (props) => {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const gameChoices = ["rock", "paper", "scissors"];
  const [outcome, setOutCome] = useState({ user: "", computer: "" });

  const db = getDatabase();
  const reference = ref(db, "users/" + props.userId);

  const updateScore = (snapshot) => {
    if (snapshot.val() !== null) setHighScore(snapshot.val().highscore);
  };

  useEffect(() => {
    if (props.userId === "") props.navigation.replace("Auth");
    else return onValue(reference, updateScore);
  }, [props.userId]);

  const storeHighScore = (score) => {
    set(reference, {
      highscore: score,
    });
  };

  const playRound = (userChoice) => {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log("user ===> ", userChoice);
    console.log("computer ===> ", gameChoices[computerChoice]);
    setOutCome({ user: userChoice, computer: gameChoices[computerChoice] });

    if (userChoice === gameChoices[computerChoice]) return;

    if (
      (userChoice === "scissors" && gameChoices[computerChoice] === "paper") ||
      (userChoice === "paper" && gameChoices[computerChoice] === "rock") ||
      (userChoice === "rock" && gameChoices[computerChoice] === "scissors")
    ) {
      setCurrentScore(currentScore + 1);

      if (currentScore >= highScore) {
        setHighScore(currentScore + 1);
        storeHighScore(currentScore + 1);
      }
    } else {
      setCurrentScore(0);
    }
  };

  const signOut = () => props.userAuth.signOut();

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.gameChoiceContainer}>
        {gameChoices.map((gameChoice, index) => (
          <Pressable
            key={index}
            style={homeStyles.gameChoiceButton}
            onPress={() => playRound(gameChoice)}
          >
            <Text style={homeStyles.buttonText}>{gameChoice}</Text>
          </Pressable>
        ))}
      </View>
      {outcome.user !== "" ? (
        <>
          <Text style={homeStyles.outcomeText}>User: {outcome.user}</Text>
          <Text style={homeStyles.outcomeText}>
            Computer: {outcome.computer}
          </Text>
        </>
      ) : null}

      <Text style={{ fontSize: 50 }}>Current score: {currentScore}</Text>
      <Text style={{ fontSize: 75 }}>Highest score: {highScore}</Text>
      <Pressable style={homeStyles.signOutButton} onPress={signOut}>
        <Text style={homeStyles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Home;
