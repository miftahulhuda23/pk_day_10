let data = []

axios.get('http://localhost:3000/books').then((response) => {
    console.log(response.data)
    const listData = document.getElementById("listData")
    data = response.data

    data.forEach((data, id) => {
        const { bookName, bookYear, bookPublisher, bookQuantity } = data
        const tableHTML = `
        <tr>
            <th scope="row">${id + 1}</th>
            <td>${bookName}</td>
            <td>${bookYear}</td>
            <td>${bookPublisher}</td>
            <td>${bookQuantity}</td>
            <td>
                <button type="submit" class="btn btn-danger" onclick="deleteBook(${data.id})"><i class="fas fa-trash-alt"></i></button>
                <button class="btn btn-secondary" onclick="updateBook(${data.id})"><i class="fas fa-pen-alt"></i></button>
            </td>
        </tr>`

        listData.innerHTML += tableHTML
    })
}).catch((error) => {
    console.log(error)
})

const deleteBook = (id) => {
    axios.delete(`http://localhost:3000/books/${id}`)
        .then((response) => {
            alert("Data Delete!!")
            window.location.reload(true)
        })
        .catch((error) => {
            console.log(error)
        })
}

const updateBook = (id) => {
    const findData = data.find((data) => {
        return data.id === id
    })
    console.log(findData)
    if (findData) {
        const bookName = window.prompt("Book Name", findData.bookName)
        const bookYear = window.prompt("Book Year", findData.bookYear)
        const bookPublisher = window.prompt("Book Publisher", findData.bookPublisher)
        const bookQuantity = window.prompt("Book Quantity", findData.bookQuantity)

        const data = {
            bookName,
            bookYear,
            bookPublisher,
            bookQuantity,
        }

        axios.put(`http://localhost:3000/books/${id}`, data)
        window.location.reload(true)
    }
}