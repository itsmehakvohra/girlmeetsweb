const buyChips = async (e) => {
  e.preventDefault();
  const playerRef = doc(db, "players", playerID);

  try {
    await updateDoc(playerRef, {
      buyChipsNum: buyChipsNum,
    });
    window.location.reload();
  } catch (e) {
    console.error("Error adding doc", e);
  }
};

const getGame = async () => {
  if (id) {
    const docRef = await doc(db, "games", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setSmallBlind(docSnap.data().smallBlind);
      setBigBlind(docSnap.data().bigBlind);
    } else {
      console.log("No such document!");
    }
  }
};

const getPlayers = async () => {
  if (id) {
    const docsRef = await collection(db, "players");
    const q = await query(docsRef, where("gameCode", "==", id));
    const querySnapshot = await getDocs(q);
    const playersData = [];
    querySnapshot.forEach((doc) => {
      playersData.push(doc.data());
    });
    console.log("players", playersData);
    setPlayers(playersData); // Update the state with the players data
  }
};
