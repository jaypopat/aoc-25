package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println("Hello, World!")

	data, ferr := os.ReadFile("./input.txt")
	if ferr != nil {
		panic(ferr)
	}
	input := string(data)

	for _, line := range strings.Split(input, "\n") {
		fmt.Println(line)
	}
}
