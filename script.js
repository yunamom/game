const numbersDiv = document.querySelector(".numbers")
//numbers 는 클래스 이므로 .numbers
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")
//draw 와 reset 은 id 이므로 앞에 #을 넣어줍니다.

const lottoNumbers = []
//로또 번호를 담을 배열을 생성합니다.
const colors = ["red","orange","yellow","green","blue"]
//로또 볼에 색을 더해줄수있는 배열을 생성합니다.
drawButton.addEventListener("click",function(){
    console.log("!") //화면에 잘나오는지 확인하기.
})