import { useState } from "react"

function App() {

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [expenses, setExpenses] = useState([])

  const addExpense = () => {

    if (!title || !amount) {
      alert("Please fill all details")
      return
    }

    const newExpense = {
      title,
      amount
    }

    setExpenses([...expenses, newExpense])

    setTitle("")
    setAmount("")
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #4facfe, #00f2fe)",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          backgroundColor: "white",
          maxWidth: "500px",
          margin: "auto",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#333"
          }}
        >
          My Personal Expenses
        </h1>

        <h3
          style={{
            textAlign: "center",
            color: "gray"
          }}
        >
          Developed by DR.YOUGA
        </h3>

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "12px",
            width: "95%",
            marginTop: "20px",
            borderRadius: "10px",
            border: "1px solid gray"
          }}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "12px",
            width: "95%",
            borderRadius: "10px",
            border: "1px solid gray"
          }}
        />

        <br />
        <br />

        <button
          onClick={addExpense}
          style={{
            padding: "12px 25px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Add Expense
        </button>

        <hr />

        <h2>
          Total: RM {
            expenses.reduce(
              (sum, item) =>
                sum + Number(item.amount),
              0
            )
          }
        </h2>

        <h2>Expense List</h2>

        {
          expenses.map((expense, index) => (

            <div
              key={index}
              style={{
                backgroundColor: "#f1f1f1",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "10px"
              }}
            >

              <h3>
                {expense.title} — RM {expense.amount}
              </h3>

            </div>

          ))
        }

      </div>

    </div>
  )
}

export default App