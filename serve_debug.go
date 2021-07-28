//+build debug

package main

func serve() (string, error) {
	// Assume svelte dev server runs on default address
	return "http://localhost:5000", nil
}
