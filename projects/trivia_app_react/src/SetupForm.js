import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { amount, error, setAmount, handleSubmit, category, isLoading,
    categoryList, difficulty, setDifficulty, setCategory } = useGlobalContext()
  return <div className="quiz">
    <h2>Trivia Quiz</h2>
    {error && <div className="error">{error}</div>}
    <form action="" className='setup-form' onSubmit={(e)=>handleSubmit(e)}>
      <div className='form-control'>
        <label htmlFor="amount">Number of Questions</label>
        <input type="number" id="amount" className='form-input'
          min="1" max="50"
          value={amount} onChange={(e)=>{setAmount(e.target.value)}}
        />
      </div>
      <div className='form-control'>
        <label htmlFor="category">Set Category</label>
        <select id="category" className='form-input' name="category" 
        onChange={e=>setCategory(e.target.value)}  
        >
          {isLoading && <option>Loading Categories...</option>}
          <option value={""}>All Categories</option>
          {categoryList.map(cat => {
            return <option key={cat.id} value={cat.id}>{cat.name}</option>
          })}
          
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor="difficulty">Set Difficulty</label>
        <select type="number" id="difficulty" className='form-input'
          onChange={(e)=>{setDifficulty(e.target.value)}}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      
      <button className='submit-btn'>Start</button>
    </form>
  </div>
}

export default SetupForm
