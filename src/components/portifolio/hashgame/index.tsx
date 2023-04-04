import {HashPage, Board, Cell, WinMessage, WinButton, WinText} from './styles'
import {useRef, useEffect} from 'react'

const HashGamePage:React.FC = () => {

    const reStartRef = useRef<HTMLButtonElement>(null)
    const winMsgRef = useRef<HTMLDivElement>(null)
    const winTextRef = useRef<HTMLParagraphElement>(null)
    const boardRef = useRef<HTMLDivElement>(null)

     let isCircleTurn: boolean
     let victoryCombination = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,4,8],
         [2,4,6],
         [0,3,6],
         [1,4,7],
         [2,5,8]
     ]

     //Init the game
     const startGame = () => {
         isCircleTurn = false;

         reStartRef.current?.addEventListener('click', startGame)
         winMsgRef.current?.classList.remove("show-message")
        
         for(const cell of document.querySelectorAll("[data-cell]")) {
             cell.removeEventListener('click', handleClick)
             cell.addEventListener('click', handleClick, {once: true})
             cell.classList.remove('x')
             cell.classList.remove('circle')
         }
        
         setBoardHoverClass()

     }
     const endGame = (isDraw: any) => {
         if(isDraw) {
            (winTextRef.current ?? { innerText: "" }).innerText = "Empate!"
         } else {
            (winTextRef.current ?? { innerText: "" }).innerText = isCircleTurn
              ? 'O venceu!' 
              : 'X venceu!'
         }
         winMsgRef.current?.classList.add('show-message')
     }
  
     const placeMark = (cell:HTMLDivElement, classToAdd: string) => {
         cell.classList.add(classToAdd)
     }

     const checkForWin = (currentPlayer: string) => {
         return victoryCombination.some(combination => {
             return combination.every(index => {
                 return document.querySelectorAll("[data-cell]")[index].classList.contains(currentPlayer)
             })
         })
     }

     const checkForDraw = () => {
         return [...document.querySelectorAll("[data-cell]")].every(cell => {
             return cell.classList.contains("x") || cell.classList.contains("circle")
         })
     }

     const setBoardHoverClass = () => {
         boardRef.current?.classList.remove("circle")
         boardRef.current?.classList.remove("x")

         isCircleTurn 
             ? boardRef.current?.classList.add("circle")
             : boardRef.current?.classList.add("x") 
     }

     //Swap Players
     const swapTurns = () => {
         isCircleTurn = !isCircleTurn
         setBoardHoverClass()
     }

     // Clicks
     const handleClick = (e:any) => {
         //Input mark
         const cell = e.target
         const classToAdd = isCircleTurn ? 'circle' : 'x'
         placeMark(cell, classToAdd)

         //Check victory
         const isWin = checkForWin(classToAdd)

         //Check a draw
         const isDraw = checkForDraw()
         if(isWin) {
             endGame(false)
         } else if(isDraw) {
             endGame(true)
         } else {
             //Change mark
             swapTurns()
         }

    }
    useEffect(() => {
        startGame()
    }, [])

    return (
            <HashPage className="container-fluid hashGameBox">

                <Board className="board" id="bd" ref={boardRef}>
                    <Cell className="cell"data-cell></Cell>
                    <Cell className="cell"data-cell></Cell>
                    <Cell className="cell"data-cell></Cell>

                    <Cell className="cell"data-cell></Cell>
                    <Cell className="cell"data-cell></Cell>
                    <Cell className="cell"data-cell></Cell>

                    <Cell className="cell"data-cell></Cell>
                    <Cell className="cell"data-cell></Cell>
                    <Cell className="cell"data-cell></Cell>
                </Board>

                <WinMessage className="winning-message" ref={winMsgRef}>
                    <WinText className="winnig-message-text" ref={winTextRef}></WinText>
                    <WinButton className="winning-message-btn" ref={reStartRef}>
                        Reiniciar !
                    </WinButton>
                </WinMessage>

                
            </HashPage> 
    )
}

export default HashGamePage