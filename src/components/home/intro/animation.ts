interface animation {
    textArray: string[]
    typingDelay: number
    erasingDelay: number
    newTextDelay: number
    textArrayIndex: number
    charIndex: number
    type(cursorSpan:any, typedTextSpan:any):any
    erase():any
}

export const cursorSpan:Element|null = document.querySelector(".cursor")
export const typedTextSpan:Element|null = document.querySelector('.typedText')

export const anima: animation = {
    textArray: [" é Dificil!", " é Divertido!", " é Uma jornada!", " é VIDA!"],
    typingDelay: 200,
    erasingDelay: 100,
    newTextDelay: 2000,
    textArrayIndex: 0,
    charIndex: 0,

    type(cursorSpan: Element, typedTextSpan: Element) {
        if(cursorSpan && typedTextSpan){
            if(anima.charIndex < anima.textArray[anima.textArrayIndex].length){
                if(!cursorSpan.classList.contains("typing")) {
                    cursorSpan.classList.add("typing")
                }
                if(typedTextSpan) typedTextSpan.textContent += anima.textArray[anima.textArrayIndex].charAt(anima.charIndex)
                anima.charIndex++
                setTimeout(this.type, anima.typingDelay)
            } else {
                if(cursorSpan) cursorSpan.classList.remove("typing")
                setTimeout(this.erase, anima.newTextDelay)
            }
        }
    },
    erase(): void{
        if(cursorSpan && typedTextSpan){
    
            if(anima.charIndex > 0) {
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing")
                typedTextSpan.textContent = anima.textArray[anima.textArrayIndex].substring(0, anima.charIndex-1)
                anima.charIndex--
                setTimeout(this.erase, anima.erasingDelay)
            } else {
                cursorSpan.classList.remove("typing")
                anima.textArrayIndex++
                if(anima.textArrayIndex >= anima.textArray.length) anima.textArrayIndex=0
                setTimeout(this.type, anima.typingDelay + 1100)
            }
        }
    }
}


//export function type(cursorSpan: Element, typedTextSpan: Element) {
//    if(cursorSpan && typedTextSpan){
//        if(anima.charIndex < anima.textArray[anima.textArrayIndex].length){
//            if(!cursorSpan.classList.contains("typing")) {
//                cursorSpan.classList.add("typing")
//            }
//            if(typedTextSpan) typedTextSpan.textContent += anima.textArray[anima.textArrayIndex].charAt(anima.charIndex)
//            anima.charIndex++
//            setTimeout(type, anima.typingDelay)
//        } else {
//            if(cursorSpan) cursorSpan.classList.remove("typing")
//            setTimeout(erase, anima.newTextDelay)
//        }
//    }
//}
//
//export function erase(): void{
//    if(cursorSpan && typedTextSpan){
//
//        if(anima.charIndex > 0) {
//            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing")
//            typedTextSpan.textContent = anima.textArray[anima.textArrayIndex].substring(0, anima.charIndex-1)
//            anima.charIndex--
//            setTimeout(erase, anima.erasingDelay)
//        } else {
//            cursorSpan.classList.remove("typing")
//            anima.textArrayIndex++
//            if(anima.textArrayIndex >= anima.textArray.length) anima.textArrayIndex=0
//            setTimeout(type, anima.typingDelay + 1100)
//        }
//    }
//}
//