const multiplicator = (a: number, b: number, text: string) => {
  console.log(text, a * b)
}

const parseArguments = (args) => { // return Array<number> TypeScript AI
  console.log(args.length)

  if (args.length !== 4) throw new Error("Invalid number of arguments")

  const firstNumber = Number(args[2])
  const secondNumber = Number(args[3])

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    return [firstNumber, secondNumber]
  }

  throw new Error("Pass only values that are numbers!")
}

const cleanArguments = parseArguments(process.argv)

console.log(process.argv)

const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

multiplicator(a, b, "Result:")

/** TypeScript gives us some control but does not do runtime control,
and it can infer data types without telling you exactly what type of data it is (line 5). */
