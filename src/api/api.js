
const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
}

const getStoredToken = () => {
    return localStorage.getItem('quiz_token');
}

const setStoredToken = (token) => {
    localStorage.setItem('quiz_token', token);
}

export const requestSessionToken = async () => {
    try {
        const response = await fetch('https://opentdb.com/api_token.php?command=request');
        const data = await response.json();
        
        if (data.response_code === 0 && data.token) {
            setStoredToken(data.token);
            return data.token;
        }
        
        throw new Error('Token alınamadı');
    } catch (error) {
        console.error('Token request error:', error);
        return null;
    }
}

export const resetSessionToken = async () => {
    const token = getStoredToken();
    if (token) {
        try {
            await fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`);
        } catch (error) {
            console.error('Token reset error:', error);
        }
    }
    localStorage.removeItem('quiz_token');
}

export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('API Response:', data);
    
    return data.results.map((dt) => ({
        ...dt,
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }));
}