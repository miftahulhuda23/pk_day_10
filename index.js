document.getElementById("address").addEventListener("submit", (event) => {
    event.preventDefault();

    const bookName = document.getElementById("bookName").value
    const bookYear = document.getElementById("bookYear").value
    const bookPublisher = document.getElementById("bookPublisher").value
    const bookQuantity = document.getElementById("bookQuantity").value

    const data = {
        bookName,
        bookYear,
        bookPublisher,
        bookQuantity,
    }

    axios.post('http://localhost:3000/books', data).then((response) => {
        console.log("data berhasil ditambah" + response)
        window.location.reload(true)
    })
        .catch((error) => {
            console.log("data gagal ditambah" + error)
        })
}) 