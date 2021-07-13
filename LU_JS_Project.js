@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

*{
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto Mono', monospace;
}
body{
    background-color: Black;
}
.container{
    background-color: gray;
    width: 80vw;
    margin: 0vh 10vw;
    padding: 20px;
}

.padd{
    padding: 20px;
}

.header{
    color: lightblue;
    width: 100%;
    height: 7vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.cards{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.card {
    height: 300px;
    width: 18%;
    margin: 1%;
    background-color: black;
    background-size: 100% 100%;
}

.overlay {
    background-image: url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpre03.deviantart.net%2F798b%2Fth%2Fpre%2Ff%2F2012%2F211%2Fe%2F0%2Fe0acb9bcc3daa0b3581931f7c828d900-d594che.png&f=1&nofb=1');
    height: 300px;
    width: 100%;
    background-color: black;
    background-size: 100% 100%;
}

.opened {
    display: none;
}
