---
title: The Go Programming Language
linter-yaml-title-alias: The Go Programming Language
date created: 2025-04-26T16:19:45-06:00
date modified: 2025-09-08T09:33:35-06:00
aliases: The Go Programming Language
---
# The Go Programming Language

<div style="text-align: center;">
		<img src="https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/192206184/trhpIvN4oJ_aOU1e7sHsyBA3dCejQQuxin5tEQ1pbWI-cove_opkIW11.jpg" width="500px">
</div>

## Metadata

- Author: #people/authors/alan-a-donovan
- Full Title: The Go Programming Language
- Category: #books
- Summary: The Go Programming Language by Alan A. Donovan explains the basics of Go, including syntax, semantics, and library usage. It emphasizes simple examples to teach concepts like goroutines, channels, and error handling. The book also covers Go's safety features and integration with C for low-level programming.

%% DATAVIEW_PUBLISHER: start

```
task
where !completed and file.name = this.file.name
```

%%

- [ ] A good quote about Complexity Add to a note about the concept of Complexity
- [ ] Add to a note about Simplicity
- [ ] A good quote about Complexity Add to a note about the concept of Complexity
- [ ] Add to a note about Simplicity
- [ ] A good quote about Complexity Add to a note about the concept of Complexity
- [ ] Add to a note about Simplicity
- [ ] A good quote about Complexity Add to a note about the concept of Complexity
- [ ] Add to a note about Simplicity
- [ ] A good quote about Complexity Add to a note about the concept of Complexity
- [ ] Add to a note about Simplicity

%% DATAVIEW_PUBLISHER: end %%

## Highlights

- Preface ([View Highlight](https://read.readwise.io/read/01j27s43xaqrrsjncpx945qq9x))
- “Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.” (From the Go web site at golang.org) ([View Highlight](https://read.readwise.io/read/01j27s3vs488eh5d8yfhsmcv8t))
- Its facilities for concurrency are new and efficient ([View Highlight](https://read.readwise.io/read/01j27s6rv6jwky12z9rqsh79v0))
- its approach to data abstraction and object-oriented programming is unusually flexible ([View Highlight](https://read.readwise.io/read/01j27s6zdz21rjghdzjt5vqpa5))
- It has automatic memory management or garbage collection. ([View Highlight](https://read.readwise.io/read/01j27s715v4kcgnr5q8cmtgpjq))
- Go is especially well suited for building infrastructure like networked servers, and tools and systems for programmers ([View Highlight](https://read.readwise.io/read/01j27s7kz48tm1t0na8bw6fn0z))
- but it is truly a general-purpose language and finds use in domains as diverse as graphics, mobile applications, and machine learning ([View Highlight](https://read.readwise.io/read/01j27s7thcf6y9dk88x4zcvz0n))
- It has become popular as a replacement for untyped scripting languages because it balances expressiveness with safety: Go programs typically run faster than programs written in dynamic languages and suffer far fewer crashes due to unexpected type errors ([View Highlight](https://read.readwise.io/read/01j27s8kdcw09p62dx8m8fm3qp))
- This book is meant to help you start using Go effectively right away and to use it well, taking full advantage of Go’s language features and standard libraries to write clear, idiomatic, and efficient programs ([View Highlight](https://read.readwise.io/read/01j27s9yt8459c73k9344dgezt))
- The Origins of Go ([View Highlight](https://read.readwise.io/read/01j27sa24cefpg6cx9ax69p811))
- Like biological species, successful languages beget offspring that incorporate the advantages of their ancestors; interbreeding sometimes leads to surprising strengths; and, very occasionally, a radical new feature arises without precedent. We can learn a lot about why a language is the way it is and what environment it has been adapted for by looking at these influences. ([View Highlight](https://read.readwise.io/read/01j27sbgbxv5fqf5j2wt14jh9h))
- Go is sometimes described as a “C-like language,” or as “C for the 21st century.” From C, Go inherited its expression syntax, control-flow statements, basic data types, call-by-value parameter passing, pointers, and above all, C’s emphasis on programs that compile to efficient machine code and cooperate naturally with the abstractions of current operating systems ([View Highlight](https://read.readwise.io/read/01j27seb1mks17pwrc2reew5jg))
- inspired by the concept of communicating sequential processes (CSP) from Tony Hoare’s seminal 1978 paper on the foundations of concurrency. In CSP, a program is a parallel composition of processes that have no shared state; the processes communicate and synchronize using channels. But Hoare’s CSP was a formal language for describing the fundamental concepts of concurrency, not a programming language for writing executable programs. ([View Highlight](https://read.readwise.io/read/01j27shm5dc7jj12n04342p0dg))
- The Go Project ([View Highlight](https://read.readwise.io/read/01j27snv3rcd0npenjrkmqqm9f))
- For instance, it has no implicit numeric conversions, no constructors or destructors, no operator overloading, no default parameter values, no inheritance, no generics, no exceptions, no macros, no function annotations, and no thread-local storage. ([View Highlight](https://read.readwise.io/read/01j284jv3r5640p81e2r3bnhjj))
- As Rob Pike put it, “complexity is multiplicative”: fixing a problem by making one part of the system more complex slowly but surely adds complexity to other parts ([View Highlight](https://read.readwise.io/read/01j28410p65245kpme2r6xfzrd))
	- [ ] A good quote about Complexity
		 Add to a note about the concept of Complexity
- The language is mature and stable, and guarantees backwards compatibility: older Go programs can be compiled and run with newer versions of compilers and standard libraries. ([View Highlight](https://read.readwise.io/read/01j284k9gvav24wzp51p3fhvdc))
- With constant pressure to add features and options and configurations, and to ship code quickly, it’s easy to neglect simplicity, even though in the long run simplicity is the key to good softwar ([View Highlight](https://read.readwise.io/read/01j2842cz3q4653f4brafrw014))
- Go has enough of a type system to avoid most of the careless mistakes that plague programmers in dynamic languages, but it has a simpler type system than comparable typed languages ([View Highlight](https://read.readwise.io/read/01j284kpgqymp05csaya94g42d))
- Simplicity requires more work at the beginning of a project to reduce an idea to its essence and more discipline over the lifetime of a project to distinguish good changes from bad or pernicious ones. With sufficient effort, a good change can be accommodated without compromising what Fred Brooks called the “conceptual integrity” of the design but a bad change cannot, and a pernicious change trades simplicity for its shallow cousin, convenience. Only through simplicity of design can a system remain stable, secure, and coherent as it grows. ([View Highlight](https://read.readwise.io/read/01j284332gq932mm5rt2ba6hw1))
	- [ ] Add to a note about Simplicity
- This approach can sometimes lead to isolated pockets of “untyped” programming within a broader framework of types, and Go programmers do not go to the lengths that C++ or Haskell programmers do to express safety properties as type-based proofs. But in practice Go gives programmers much of the safety and run-time performance benefits of a relatively strong type system without the burden of a complex one. ([View Highlight](https://read.readwise.io/read/01j284mggqcvdfj9zsjkgtp5fv))
- The Go project includes the language itself, its tools and standard libraries, and last but not least, a cultural agenda of radical simplicity ([View Highlight](https://read.readwise.io/read/01j28451dejqjd9wfrjj090ajm))
- As a recent high-level language, Go has the benefit of hindsight, and the basics are done well: it has garbage collection, a package system, first-class functions, lexical scope, a system call interface, and immutable strings in which text is generally encoded in UTF-8 ([View Highlight](https://read.readwise.io/read/01j2845gq4qvn7ybngbsmp4wva))
- But it has comparatively few features and is unlikely to add more ([View Highlight](https://read.readwise.io/read/01j28460jye7yctqep15f280fc))
- The variable-size stacks of Go’s lightweight threads or goroutines are initially small enough that creating one goroutine is cheap and creating a million is practical. ([View Highlight](https://read.readwise.io/read/01j284phn3th42jnbj8cpqthak))
- Go’s standard library, often described as coming with “batteries included,” provides clean building blocks and APIs for I/O, text processing, graphics, cryptography, networking, and distributed applications, with support for many standard file formats and protocols. ([View Highlight](https://read.readwise.io/read/01j284qgw57bdke52xem0nrghr))
- Organization of the Book ([View Highlight](https://read.readwise.io/read/01j284v4xxdpta2sdzt8nb1a59))
- We assume that you have programmed in one or more other languages, whether compiled like C, C++, and Java, or interpreted like Python, Ruby, and JavaScript, so we won’t spell out everything as if for a total beginner. Surface syntax will be familiar, as will variables and constants, expressions, control flow, and functions. ([View Highlight](https://read.readwise.io/read/01j284v9k7yccekw8bwsks1atg))
- [Chapter 1](#None) is a tutorial on the basic constructs of Go, introduced through a dozen programs for everyday tasks like reading and writing files, formatting text, creating images, and communicating with Internet clients and servers. ([View Highlight](https://read.readwise.io/read/01j284v25rhadeycdw2enyxxjp))
- [Chapter 2](#None) describes the structural elements of a Go program—declarations, variables, new types, packages and files, and scope. ([View Highlight](https://read.readwise.io/read/01j284ve33g7bd5qpdc3fsgssj))
- [Chapter 3](#None) discusses numbers, booleans, strings, and constants, and explains how to process Unicode. ([View Highlight](https://read.readwise.io/read/01j284vkjsd1v6wg0kdshypsen))
- [Chapter 4](#None) describes composite types, that is, types built up from simpler ones using arrays, maps, structs, and slices, Go’s approach to dynamic lists. ([View Highlight](https://read.readwise.io/read/01j284vwpn9zwembskbm0mt6pw))
- [Chapter 5](#None) covers functions and discusses error handling, panic and recover, and the defer statement. ([View Highlight](https://read.readwise.io/read/01j284whp2sev7jg3h19kkm28p))
- Chapters 1 through 5 are thus the basics, things that are part of any mainstream imperative language ([View Highlight](https://read.readwise.io/read/01j284wy8p4r3j2n7a271rxqan))
- The remaining chapters focus on topics where Go’s approach is less conventional: methods, interfaces, concurrency, packages, testing, and reflection. ([View Highlight](https://read.readwise.io/read/01j284xegsmcdr70e3dpeygn1g))
- Go has an unusual approach to object-oriented programming. There are no class hierarchies, or indeed any classes; complex object behaviors are created from simpler ones by composition, not inheritance ([View Highlight](https://read.readwise.io/read/01j284y5et07km3vyd13fy0qtq))
- Methods may be associated with any user-defined type, not just structures, and the relationship between concrete types and abstract types (interfaces) is implicit, so a concrete type may satisfy an interface that the type’s designer was unaware of ([View Highlight](https://read.readwise.io/read/01j284yq0j8pfvfb2z239zks00))
- Methods are covered in [Chapter 6](#None) ([View Highlight](https://read.readwise.io/read/01j284ytbr9b8n7bpa1xjk109d))
- interfaces in [Chapter 7](#None) ([View Highlight](https://read.readwise.io/read/01j284yxz6gfhe3k1frb9a05vt))
- [Chapter 8](#None) presents Go’s approach to concurrency, which is based on the idea of communicating sequential processes (CSP), embodied by goroutines and channels. ([View Highlight](https://read.readwise.io/read/01j284z8s9k0gnkbxvdscvq33z))
- [Chapter 9](#None) explains the more traditional aspects of concurrency based on shared variables. ([View Highlight](https://read.readwise.io/read/01j284zc8f12pvgpaadmv5etkr))
- [Chapter 10](#None) describes packages, the mechanism for organizing libraries. This chapter also shows how to make effective use of the go tool, which provides for compilation, testing, benchmarking, program formatting, documentation, and many other tasks, all within a single command. ([View Highlight](https://read.readwise.io/read/01j284zt1pwyrntvcv3qegkndy))
- [Chapter 11](#None) deals with testing, where Go takes a notably lightweight approach, avoiding abstraction-laden frameworks in favor of simple libraries and tools. The testing libraries provide a foundation atop which more complex abstractions can be built if necessary. ([View Highlight](https://read.readwise.io/read/01j284zz2mwh5pyj7ctvbrkpt4))
- [Chapter 12](#None) discusses reflection, the ability of a program to examine its own representation during execution. Reflection is a powerful tool, though one to be used carefully; this chapter explains finding the right balance by showing how it is used to implement some important Go libraries. ([View Highlight](https://read.readwise.io/read/01j2850ckh5c2x4bqkwd7vtjrx))
- [Chapter 13](#None) explains the gory details of low-level programming that uses the unsafe package to step around Go’s type system, and when that is appropriate. ([View Highlight](https://read.readwise.io/read/01j28510qensb2h1a1wdsa7fyk))
- The best source for more information about Go is the official web site, https://golang.org, which provides access to the documentation, including the Go Programming Language Specification, standard packages, and the like. There are also tutorials on how to write Go and how to write it well, and a wide variety of online text and video resources that will be valuable complements to this book ([View Highlight](https://read.readwise.io/read/01j285rwme0mk34ssqqfss861k))
- The Go Blog at blog.golang.org publishes some of the best writing on Go, with articles on the state of the language, plans for the future, reports on conferences, and in-depth explanations of a wide variety of Go-related topics. ([View Highlight](https://read.readwise.io/read/01j285s93f2wk227zfapjgwdrd))
- One of the most useful aspects of online access to Go (and a regrettable limitation of a paper book) is the ability to run Go programs from the web pages that describe them. This functionality is provided by the Go Playground at play.golang.org, and may be embedded within other pages, such as the home page at golang.org or the documentation pages served by the godoc tool. ([View Highlight](https://read.readwise.io/read/01j285t1d6jpynsdhm7h3mqx9g))
- The Playground makes it convenient to perform simple experiments to check one’s understanding of syntax, semantics, or library packages with short programs, and in many ways takes the place of a read-eval-print loop (REPL) in other languages. Its persistent URLs are great for sharing snippets of Go code with others, for reporting bugs or making suggestions. ([View Highlight](https://read.readwise.io/read/01j285twsp8hk793tv1f3r0pbw))
- Built atop the Playground, the Go Tour at tour.golang.org is a sequence of short interactive lessons on the basic ideas and constructions of Go, an orderly walk through the language ([View Highlight](https://read.readwise.io/read/01j285v28ew2zmc57w0ebjms4e))
- Since Go is an open-source project, you can read the code for any type or function in the standard library online at https://golang.org/pkg; the same code is part of the downloaded distribution. Use this to figure out how something works, or to answer questions about details, or merely to see how experts write really good Go ([View Highlight](https://read.readwise.io/read/01j285w93xz7956w6xxxgczp7m))
- In this chapter we’ll try to give you a taste of the diversity of programs that one might write in Go, ranging from simple file processing and a bit of graphics to concurrent Internet clients and servers. ([View Highlight](https://read.readwise.io/read/01j285z615fnycwgtcrg9c2n2x))
- 1.1 Hello, World ([View Highlight](https://read.readwise.io/read/01j2861egz480x9wn1055n6rey))
- A package consists of one or more .go source files in a single directory that define what the package does ([View Highlight](https://read.readwise.io/read/01j2870a6d5x4sa7bf0pkagykr))
- Each source file begins with a package declaration, here package main, that states which package the file belongs to, followed by a list of other packages that it imports, and then the declarations of the program that are stored in that file. ([View Highlight](https://read.readwise.io/read/01j2870s33hwze425j6s7gcatr))
- The Go standard library has over 100 packages for common tasks like input and output, sorting, and text manipulation. For instance, the fmt package contains functions for printing formatted output and scanning input. ([View Highlight](https://read.readwise.io/read/01j2871pah82jryf667gaw6npd))
- Println is one of the basic output functions in fmt; it prints one or more values, separated by spaces, with a newline character at the end so that the values appear as a single line of output. ([View Highlight](https://read.readwise.io/read/01j2871yhwtjdaw5hgqsnweq3f))
- Package main is special. It defines a standalone executable program, not a library. Within package main the function main is also special—it’s where execution of the program begins. Whatever main does is what the program does. Of course, main will normally call upon functions in other packages to do much of the work, such as the function fmt.Println. ([View Highlight](https://read.readwise.io/read/01j2872nrkv29g1f35k0nm0dk7))
- We must tell the compiler what packages are needed by this source file; that’s the role of the import declaration that follows the package declaration. The “hello, world” program uses only one function from one other package, but most programs will import more packages. ([View Highlight](https://read.readwise.io/read/01j28732p1xfdzfed8qjqkcx8d))
- You must import exactly the packages you need. A program will not compile if there are missing imports or if there are unnecessary ones. This strict requirement prevents references to unused packages from accumulating as programs evolve. ([View Highlight](https://read.readwise.io/read/01j2873dpfjgmmwny65d122es1))

> I love the explicit nature of imports

- The import declarations must follow the package declaration. ([View Highlight](https://read.readwise.io/read/01j2874n1drtqk36wtpfg44zte))
- After that, a program consists of the declarations of functions, variables, constants, and types (introduced by the keywords func, var, const, and type); for the most part, the order of declarations does not matter. ([View Highlight](https://read.readwise.io/read/01j2875hwz1866532685d4adye))
- A function declaration consists of the keyword func, the name of the function, a parameter list (empty for main), a result list (also empty here), and the body of the function—the statements that define what it does—enclosed in braces. ([View Highlight](https://read.readwise.io/read/01j2876q5qhbr1gxrqy8veryt4))
- We’ll take a closer look at functions in [Chapter 5](#None). ([View Highlight](https://read.readwise.io/read/01j9aqj3nf6x5mp9ya9ppc206p))

> I look forward to this chapter. I'm very interested to understand how functions work in Go

- Go takes a strong stance on code formatting. The gofmt tool rewrites code into the standard format, and the go tool’s fmt subcommand applies gofmt to all the files in the specified package, or the ones in the current directory by default ([View Highlight](https://read.readwise.io/read/01j2878k70drefa7rvd7khx4a6))

> I really like this strong stance on formatting. JavaScript's Prettier is great, but it would be better if it was just part of the language

- Declaring a standard format by fiat eliminates a lot of pointless debate about trivia and, more importantly, enables a variety of automated source code transformations that would be infeasible if arbitrary formatting were allowed. ([View Highlight](https://read.readwise.io/read/01j287a9jhzebw357vw5j6q2fw))
- Many text editors can be configured to run gofmt each time you save a file, so that your source code is always properly formatted. ([View Highlight](https://read.readwise.io/read/01j9ar4qjxwmkmpyt6tv15rs0a))

> This was easy to set up and it works wonderfully in VSCode

- 1.2 Command-Line Arguments ([View Highlight](https://read.readwise.io/read/01j287ch88cfbv8tvckhgwwrwe))
- The os package provides functions and other values for dealing with the operating system in a platform-independent fashion ([View Highlight](https://read.readwise.io/read/01j9ar8m79bhhkv8vg7m4s2zhp))
- Command-line arguments are available to a program in a variable named Args that is part of the os package; thus its name anywhere outside the os package is os.Args ([View Highlight](https://read.readwise.io/read/01j9ar93x18046byqawkjw46fz))
- Slices are a fundamental notion in Go ([View Highlight](https://read.readwise.io/read/01j9arfmq4nx8z100dffs7y14q))
- a slice as a dynamically sized sequence s of array elements where individual elements can be accessed as s[i] and a contiguous subsequence as s[m:n]. The number of elements is given by len(s) ([View Highlight](https://read.readwise.io/read/01j9arfyh2q0f43va9g13msy1e))
- Go uses half-open intervals that include the first index but exclude the last ([View Highlight](https://read.readwise.io/read/01j9arddagfrt1pzrd6hm74252))

> In "The Go Programming Language," the term "half-open intervals" refers to a convention used for indexing slices, where the starting index is included but the ending index is excluded. This means that a slice expression `s[m:n]` includes elements from index `m` up to, but not including, index `n`, resulting in a total of `n-m` elements. This approach simplifies logic and reduces potential off-by-one errors when working with sequences of data.

- The first element of os.Args, os.Args[0], is the name of the command itself ([View Highlight](https://read.readwise.io/read/01j9arhs6jq4zvwqvq7bse768h))
- A variable can be initialized as part of its declaration. If it is not explicitly initialized, it is implicitly initialized to the zero value for its type, which is 0 for numeric types and the empty string "" for strings ([View Highlight](https://read.readwise.io/read/01j9arz1dk9ajs7p1hjsnqekc6))

> In JavaScript, the these would be set to `undefined`. `0` & empty string totally makes sense, but that will be a key difference to keep in mind

- Thus in this example, the declaration implicitly initializes s and sep to empty strings ([View Highlight](https://read.readwise.io/read/01j9arzefz1fez9t1x8n581dvp))
- The operator += is an assignment operator ([View Highlight](https://read.readwise.io/read/01j9as1rppvez25b9w4pkxs256))
- The loop index variable i is declared in the first part of the for loop. The := symbol is part of a short variable declaration, a statement that declares one or more variables and gives them appropriate types based on the initializer values ([View Highlight](https://read.readwise.io/read/01j9as8jdqqrbm5504by1325k7))
- The increment statement i++ adds 1 to i; it’s equivalent to i += 1 which is in turn equivalent to i = i + 1 ([View Highlight](https://read.readwise.io/read/01j9as93zafnh8ng9vcmjxjedw))
- There’s a corresponding decrement statement i-- that subtracts ([View Highlight](https://read.readwise.io/read/01j9as9dhrd78a5tavgb75t3rw))
- These are statements, not expressions as they are in most languages in the C family, so j = i++ is illegal, and they are postfix only, so --i is not legal either. ([View Highlight](https://read.readwise.io/read/01j9as9wq654a31x8ghatbva6n))
- The for loop is the only loop statement in Go. It has a number of forms, one of which is illustrated here: ([View Highlight](https://read.readwise.io/read/01j9asacqrwkw1zxmvjz7pqc1z))
- for initialization; condition; post {
	// zero or more statements
	} ([View Highlight](https://read.readwise.io/read/01j9asaejwfn5qmayks8hyppjm))
- Parentheses are never used around the three components of a for loop ([View Highlight](https://read.readwise.io/read/01j9asbpheacdft59p4d3h3gmb))
- The braces are mandatory, however, and the opening brace must be on the same line as the post statement. ([View Highlight](https://read.readwise.io/read/01j9asbtb7wz56vf9b7871eks6))
- There are several ways to declare a string variable; these are all equivalent:
	s := ""
	var s string
	var s = ""
	var s string = "" ([View Highlight](https://read.readwise.io/read/01j9fhn5gmhrctcda84bjrgr5y))
- Why should you prefer one form to another? ([View Highlight](https://read.readwise.io/read/01j9fhndq26d5pacgskhap3f3g))
- The first form, a short variable declaration, is the most compact, but it may be used only within a function, not for package-level variables. ([View Highlight](https://read.readwise.io/read/01j9fhnkw9dcx79w9y3zyyj95d))
- The second form relies on default initialization to the zero value for strings, which is "". ([View Highlight](https://read.readwise.io/read/01j9fhny05vws14zt72zffzrc2))
- The third form is rarely used except when declaring multiple variables. ([View Highlight](https://read.readwise.io/read/01j9fhpb6gz97g291y7ta8b5ev))
- The fourth form is explicit about the variable’s type, which is redundant when it is the same as that of the initial value but necessary in other cases where they are not of the same type. ([View Highlight](https://read.readwise.io/read/01j9fhpvbqtgmmkzmdafpsrsyb))
- In practice, you should generally use one of the first two forms, with explicit initialization to say that the initial value is important and implicit initialization to say that the initial value doesn’t matter. ([View Highlight](https://read.readwise.io/read/01j9fhw2q2vh9t0d45qtgqgsbk))
- f the amount of data involved is large, this could be costly. A simpler and more efficient solution would be to use the Join function from the strings package: ([View Highlight](https://read.readwise.io/read/01j9fhyrkdyd6aef8mxkmz7yh8))

> Love it! This is what I was thinking about how I'd do it in JavaScript.

- Exercise 1.1: Modify the echo program to also print os.Args[0], the name of the command that invoked it. ([View Highlight](https://read.readwise.io/read/01j9fjz4dpvmxce82bt475jkwh))

> ```go

    func main() {
    fmt.Println(os.Args[0:])
    }
    ```
- Exercise 1.2: Modify the echo program to print the index and value of each of its arguments, one per line. ([View Highlight](https://read.readwise.io/read/01j9fk27dgk12q89r0xyn23ffn))

> ```go

    func main() {
    for i, arg := range os.Args[1:] {
    fmt.Println(i, arg)
    }
    }
    ```
- 1.3 Finding Duplicate Lines ([View Highlight](https://read.readwise.io/read/01j9fk5jeqk7zen1m9064xjzj6))
- This program introduces the if statement, the map data type, and the bufio package. ([View Highlight](https://read.readwise.io/read/01j9fkafb7e7njm1kv77v40ze7))
- // Dup1 prints the text of each line that appears more than
	// once in the standard input, preceded by its count. ([View Highlight](https://read.readwise.io/read/01j9fk7zg2yx29c3jh3nzy8h1m))
- As with for, parentheses are never used around the condition in an if statement, but braces are required for the body. There can be an optional else part that is executed if the condition is false. ([View Highlight](https://read.readwise.io/read/01j9fkfpzcz75nbz577mdgs9hy))
- A map holds a set of key/value pairs and provides constant-time operations to store, retrieve, or test for an item in the set. ([View Highlight](https://read.readwise.io/read/01j9fkgfpqbh0fa1n6wv7h6frx))
- The key may be of any type whose values can be compared with ==, strings being the most common example ([View Highlight](https://read.readwise.io/read/01j9fkkbt8fwezrp2takxffjj5))
- the value may be of any type at all ([View Highlight](https://read.readwise.io/read/01j9fkkg62rjm4zr34mz6ns6ew))
- In this example, the keys are strings and the values are ints ([View Highlight](https://read.readwise.io/read/01j9fkkxmap3a925cnz0nb6xhn))
- The built-in function make creates a new empty map; it has other uses too ([View Highlight](https://read.readwise.io/read/01j9fkmb7vmtsa7m7t1k1vwd63))
- The order of map iteration is not specified, but in practice it is random, varying from one run to another. This design is intentional, since it prevents programs from relying on any particular ordering where none is guaranteed. ([View Highlight](https://read.readwise.io/read/01j9fm2mayswqpfp5m7yeaebp0))
- Printf has over a dozen such conversions, which Go programmers call verbs ([View Highlight](https://read.readwise.io/read/01j9fmcddekaen394pw862y28n))
- This table is far from a complete specification but illustrates many of the features that are available:
	[View table image](#None)
	%d
	decimal integer
	%x, %o, %b
	integer in hexadecimal, octal, binary
	%f, %g, %e
	floating-point number: 3.141593 3.141592653589793 3.141593e+00
	%t
	boolean: true or false
	%c
	rune (Unicode code point)
	%s
	string
	%q
	quoted string "abc" or rune 'c'
	%v
	any value in a natural format
	%T
	type of any value
	 literal percent sign (no operand) ([View Highlight](https://read.readwise.io/read/01j9fmcgvavr2qj3d0q2zq77rj))
- The format string in dup1 also contains a tab \t and a newline \n. String literals may contain such escape sequences for representing otherwise invisible characters ([View Highlight](https://read.readwise.io/read/01j9fmdz48ajqhj8qzjzw8vpbf))
- Printf does not write a newline by default ([View Highlight](https://read.readwise.io/read/01j9fme3yx887fdbq9r1a8z4k8))
- By convention, formatting functions whose names end in f, such as log.Printf and fmt.Errorf, use the formatting rules of fmt.Printf ([View Highlight](https://read.readwise.io/read/01j9fmedf2tc7jg2hvfzdkezgj))
- names end in ln follow Println, formatting their arguments as if by %v, followed by a newline. ([View Highlight](https://read.readwise.io/read/01j9fmetcmy755sky3hvwny3tp))
- // Dup2 prints the count and text of lines that appear more than once
	// in the input.  It reads from stdin or from a list of named files.
	package main ([View Highlight](https://read.readwise.io/read/01j9fmg13r1bq1bqzn1r47tq4q))
- Go code is organized into packages, which are similar to libraries or modules ([View Highlight](https://read.readwise.io/read/01j9apxv0ah448p1t9qnjtbnkt))
