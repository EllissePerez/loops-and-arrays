
for (let countDown = 1000; countDown > -1; countDown = countDown -= 1) {
    console.log(countDown);
}

for (let quarterCount = 0; quarterCount < 10001; quarterCount = quarterCount += 1) {
    if (quarterCount == 2500) {
        alert("A quarter of the way there!");
    }
    else if (quarterCount == 5000) {
        alert("Halfway there!");
    }
    else if (quarterCount == 10000) {
        alert("The loop is done!")
    }
}

const favoriteShows = ["One Piece", "Breaking Bad", "Bojack Horseman", "Cyberpunk: Edgerunners", "Death Note"];

for (let i = 0; i < favoriteShows.length; i++) {
    console.log("My #" + (i + 1) + " favorite show is " + favoriteShows[i]);
}
