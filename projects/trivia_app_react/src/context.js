import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

// const table = {
//   sports: 21,
//   history: 23,
//   politics: 24,
// }

const API_ENDPOINT = 'https://opentdb.com/api.php'

const CategoryUrl = "https://opentdb.com/api_category.php"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSetup, setIsSetup]= useState(true)
  const [questions, setQuestions] = useState([])
  const [questionNum, setQuestionNum] = useState(0)
  const [score, setScore] = useState(0)
  const [amount, setAmount] = useState(5);
  const [category, setCategory] = useState('');
  const [categoryList, setCategoryList] = useState([])
  const [difficulty, setDifficulty] = useState('easy');
  const [error, setError] = useState('');
  const [isModal, setIsModal] = useState(false);

  const getQuestions = async () => {
    setIsLoading(true)
    
    try {const response = await axios(API_ENDPOINT, {
      params: {
        amount: amount,
        category: category,
        difficulty: difficulty
      }
    });
      const data = response.data
      
      if (data.response_code === 0) {
        setQuestions(data.results)
        setIsLoading(false)
        setIsSetup(false)
        setError('')
    } else {
        setIsLoading(false)
        if (data.response_code == 1) {
          setError('Amount is set too high for specific query!')
        } else {
          setError('Something went wrong with the API - try again.')
        }
      }
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }
  
  const getCategories = async () => {
    const response = await axios(CategoryUrl);
    const data = response.data.trivia_categories
    setCategoryList(data)
    setIsLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getQuestions()
  }

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1); 
    if (questionNum < questions.length-1) setQuestionNum(questionNum + 1);
    else setIsModal(true)
  } 

  const resetQuiz = () => {
    setScore(0)
    setIsModal(false)
    setIsSetup(true)
    setQuestionNum(0)
  }

  useEffect(() => {
    getCategories()
  },[])

  return <AppContext.Provider value={{
    isLoading, amount, questions, isSetup, isModal, score, questionNum,
    category, difficulty, error, categoryList,
    setAmount, handleSubmit, setIsModal, handleAnswer, resetQuiz,
    setDifficulty, setCategory
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
