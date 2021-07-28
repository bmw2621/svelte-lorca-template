//+build generate

package main

import "github.com/zserge/lorca"

func main() {
	lorca.Embed("main", "assets.go", "public")
}
