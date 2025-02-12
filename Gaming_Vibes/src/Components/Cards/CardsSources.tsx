import DinoRun from '../../assets/Images/DinoRun.png';
import RollTheDice from '../../assets/Images/RollTheDIce.png';
import HandCricket from '../../assets/Images/HandCricket.png';
import GuessTheNumber from '../../assets/Images/GuessTheNumber.png';
import Sumo from '../../assets/Images/Sumo.png';
import TicTacToe from '../../assets/Images/TicTacToe.png';
import KidsGarden from '../../assets/Images/KidsGarden.png';
import ScrambledWords from '../../assets/Images/ScrambledWords.png';
import StoryBoard from '../../assets/Images/StoryBoard.png';

interface Card{
    id: number,
    url: string,
    title: string,
    desc: string
}
const GameCards: Card[]=[
    {id: 1, url: DinoRun, title: "Dino Run", desc: "Simply press the space bar (or up arrow) and the dino will start running. Press the up arrow to jump over the obstacles (like cacti) in your path. The longer you hold the up arrow, the higher dino will jump. If you need to duck under something, press the down arrow."},
    {id:2,url:RollTheDice,title:"Roll The Dice",desc: "The player has to roll the dice and the numbers appearing on each roll will be added as it's score and if in case 1 appears, you will loose that score, but you can save your score after every roll, and in both cases the turn is passed on to second player."},
    {id:3,url:HandCricket,title:"Hand Cricket",desc: "First of all you decide to bat or bowl first. Then to score Runs, click on the Runs you wish to score and the Device will select a random number. Show of same hands results in a wicket otherwise will be added as a score. Each side has 5 wickets."},
    {id:4,url:GuessTheNumber,title:"Guess The Number",desc:"The device selects a number between 1-20 and the player has to guess it. With every guess the device will give uh the hints, if you are close to the number or not. With every wrong guess your score decreases. Follow the hints and Guess the Number."},
    {id:5,url:Sumo,title:"Sumo",desc: "It is a Two player game in which both the players have to press the assigned keys (Player1 - S and Player2 - L) continuously. Player movement is controlled by the number of key press. Player who throws the opponant out of the ring wins!"},
    {id:6,url:TicTacToe,title:"Tic Tac Toe",desc: "The game is played on a grid that's 3 squares by 3 squares. You are X, and the computer in is O. Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner."},
    {id: 7,url:KidsGarden,title:"Kids Garden",desc: "One Can use this Game to teach their kids and learn at the same time using different modes in the Game like alphabets numbers colours and animals. Selet the button and it spells it out. Making it one of the most perfect ways for kids to take their first step in educaton"},
    {id: 8,url: ScrambledWords,title: "Scrambled Words",desc:"In this game you have to write the correct word from Scrambed words and then write it accordingly to find the right Answer from a set of jumbled words"},
    {id: 9,url:StoryBoard,title:"Story Board",desc:"The Person using this can make his/her own decisions as a protagonist and continue in the story to find out what happens in the end. You have 2 stories to choose from and enjoy different stories"},
]
export default GameCards;