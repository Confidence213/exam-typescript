type Operation = "add" | "multiply" | "divide"
type Result = number

const calculator = (a: number, b: number, operation: Operation): Result => {

  if (operation === "add") return a + b
  if (operation === "multiply") return a * b

  if (operation === "divide") {
    if (b === 0) throw new Error("Can't divide by 0!")
    return a / b
  }

  throw new Error("Operation not defined!")
}

try {
  console.log(calculator(30, 31, "add"))
  console.log(calculator(18, 0, "divide"))
  console.log(calculator(15, 2, "multiply"))
} catch (err) {
  console.log("Error", err)
}
