---
title: Base64 Command Line
date created: 2023-07-28T17:55:59-06:00
date modified: 2024-02-22T06:39:10-07:00
---
# Base64 Command Line

## How to Base64 Encode and Decode From Command-line

[source](https://www.serverlab.ca/tutorials/linux/administration-linux/how-to-base64-encode-and-decode-from-command-line/)

### Overiew

In this tutorial, you will learn how to base64 encode and decode from the command-line on Linux. You will also learn what base64 encoding is and why it should never be used to protect data from unauthorized access.

Base64 encoding and decoding data has many use cases. One being is ensuring data integrity when transferring data over the network, while another is storing Secrets in Kubernetes.

After reading this tutorial you will understand how to easily encode files or strings, and then decode them back.

### How to Base64 Encode on Ubuntu, Debian, OSX, and Red Hat

If you are running popular linux distributions, such as Ubuntu, Debian, CentOS, or Red Hat, the base64 command-line tool is typically pre-installed. You should not have to perform any additional steps.

OSX also comes bundled with its own version of base64.

### Why Base64 Encode Data

Transferring an ASCII file over the network can cause corruption if not decoded correctly. The reason is ASCII files are string converted to bytes, and when those bytes are decoded incorrectly back to ASCII your data becomes corrupt.

Base64 was introduced as a way to convert your ASCII data into arbitrary bytes, where they could then be transferred as bytes, and decoded correctly back to ASCII.

In short, base64 encoding ensures the integrity of our data when transferred over the network.

### Base64 is Not Encryption

Encoding files is not encryption and should never be used to secure sensitive data on disk. Rather it is a useful way of transferring or storing large data in the form of a string.

While it may obfuscate that actual data from should surfers, anyone who has access to base64 encoded data can easily decode it.

### Base64 Encoding a String

To base64 encode string you can pipe an echo command into the base64 command-line tool. To ensure no extra, hidden characters are added use the `-n` flag.

Without the `-n` flag you may capture a hidden characters, like line returns or spaces, which will corrupt your base64 encoding.

```bash
echo -n 'my-string' | base64
```

Which will output the following

```bash
bXktc3RyaW5n
```

### Base64 Encoding a File

To base64 encode a file

```bash
base64 /path/to/file
```

This will output a very long, base64 encoded string. You may want to write the stdout to file instead.

```none
bas64 /path/to/file > output.txt
```

### Decoding Strings

To decode with base64 you need to use the `--decode` flag. With encoded string, you can pipe an echo command into base64 as you did to encode it.

Using the example encoding shown above, let’s decode it back into its original form.

```none
echo -n 'bXktc3RyaW5n' | base64 --decode
```

Provided your encoding was not corrupted the output should be your original string.

### Decoding Files

To decode a file with contents that are base64 encoded, you simply provide the path of the file with the `--decode` flag.

```none
base64 --decode /path/to/file
```

As with encoding files, the output will be a very long string of the original file. You may want to output stdout directly to a file.

```none
base64 --decode /path/to/file > output.txt
```

### Conclusion

In this tutorial, you learned how to base64 encode files and strings. This something commonly done to transfer files in such a way that it remains

---

![[Pasted image 20230728175511.png]]

## Decode Base64 Data into a String or File in Linux / Mac

[source](https://hackernoon.com/how-to-convert-base64-data-to-files-on-linux-and-mac-os)

[Bash](https://hackernoon.com/how-to-use-bash?ref=hackernoon.com) is a Unix shell and command language. These bash commands are widely used in Mac OS X and Unix-like operating systems for interacting with the system via commands. Bash also has a utility command, `Base64`, for encoding and decoding data.

Base64 is an encoding scheme that represents binary files in a textual format.

This tutorial teaches you the different methods to decode [Base64](https://hackernoon.com/learn-more-about-data-encoding-base64-vs-base58-9q263ehf?ref=hackernoon.com) data into a file in Unix-like operating systems using commands and online tools.

## Decode a Base64 Data into a File Using Base64 Bash Command

The [base64](https://linux.die.net/man/1/base64?ref=hackernoon.com) command, with the flag `--decode`, decodes the base64 data into a string.

It is available since the [Mac OS X Version 10.7](https://support.moonpoint.com/os/os-x/man/base64.html?ref=hackernoon.com) and all UNIX-like operating systems. If you’re using a Mac OS X version older than 10.7, check the OpenSSL Base64 explained in the next section of this tutorial.

To decode base64 data into a file,

- Invoke the Base64 command with the `-d` parameter. It’ll decode base64 encoded data
- Use the [here-string](https://manpages.ubuntu.com/manpages/xenial/en/man1/bash.html?ref=hackernoon.com#:~:text=a%20natural%20fashion.-,Here%20Strings,-A%20variant%20of) operator and pass the Base64 encoded data
- Direct the output to a file using `>` and pass the file name with an extension. You need to pass the **correct** extension of the file equivalent to the Base64 string. Otherwise, the output file will be corrupted due to the incorrect extension

**Important:** Ensure you have _write access_ to the current working directory needed to create the new output file.

**Code**

The following code demonstrates creating an image file from the Base64 encoded string.

```bash
base64 -d <<< "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" > image.png
```

## Decode Base64 Data into a File Using OpenSSL Base64 Command

[OpenSSL](https://en.wikipedia.org/wiki/OpenSSL?ref=hackernoon.com) is a software library that enables secure network communication applications. Base64 is commonly used as a primary encoding when transmitting information over a network. OpenSSL offers a command-line tool to facilitate the process of encoding or decoding strings using Base64 encoding.

Use this method when your system doesn’t have the Base64 command line utility. For example, Mac OS versions earlier than 10.7.

To decode a base64 string into a file using the OpenSSL base64 command line utility,

- Invoke the `openssl base64` command with the `-d` parameter
- Use the [here-string](https://manpages.ubuntu.com/manpages/xenial/en/man1/bash.html?ref=hackernoon.com#:~:text=a%20natural%20fashion.-,Here%20Strings,-A%20variant%20of) operator and pass the Base64 encoded data
- Direct the output to a file using the `-out` parameter and pass the file name with an extension. You need to pass the correct extension of the file equivalent to the Base64 string

**Important:** Ensure you have _write access_ to the current working directory needed to create the new output file.

**Code**

```bash
$ openssl base64 -d <<< "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" -out image.png
```

## Decode Base64 Data into a File Using an Online Base64 Decoder Tool

You can use the [Online Base64 Decoder Tool](https://www.base64decode.pro/?ref=hackernoon.com) in the browser to decode the Base64 string into a file.

To decode a Base64 string into a file using the tool,

- Add the Base64 encoded text in a `.txt` file and upload it to the decoder tool
- Click _Decode_, and It will create an output file based on the input text

The main advantage of using the online Base64 decoder tool is you _do not need_ to know the extension of the file types. For example, the image file can be in different formats such as `.jpg`, `.png` or a `.gif`. The online tool will detect the file extension automatically based on the input string and create a file equivalent to the string with the proper file extension.
