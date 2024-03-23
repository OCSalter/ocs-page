const HORIZONTAL_EYES = [':', ';', '=', '8','X', ];
const HORIZONTAL_MOUTH = [')', '}', '>', 'D', ']', '/', '|', '7', '3', ];
const FACES = ['◡̈', 'ㅤᵕ̈', '•ᴗ•', '˶ᵔ ᵕ ᵔ˶', '(,,> ᴗ <,,)', '૮ ˶ᵔ ᵕ ᵔ˶ ა', '( ^ 〰 ^) ', '₍ᐢ.  ̫.ᐢ₎', ];
const HORIZONTAL_EYES_LENGTH = HORIZONTAL_EYES.length;
const HORIZONTAL_MOUTH_LENGTH = HORIZONTAL_MOUTH.length;
const FACES_LENGTH = FACES.length;

export function generateFaces(size: number = 1000): string {
    if (size <= 0) {
        return "";
    }
    const face = getFace();
    return getFace() + ' ' + generateFaces(size - face.length);
}
    
function getFace() {
    switch(randomInt(2)){
        case 0:
            return getHorizontalFace();
        default:
            return FACES[randomInt(FACES_LENGTH)]
    }
}

function getHorizontalFace() {
    return HORIZONTAL_EYES[randomInt(HORIZONTAL_EYES_LENGTH)] + HORIZONTAL_MOUTH[randomInt(HORIZONTAL_MOUTH_LENGTH)];
}

function randomInt(max: number) {
    return Math.floor(Math.random() * max);
}
