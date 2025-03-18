let cart = [];
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc mông "
    },
    {
         id: 2,
        name: "mứt",
         price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc kinh "
    },
    {
        id: 3,
        name: "Cơm lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc mông "
    },
    {
        id: 4,
        name: "bánh đậu xanh ",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc kinh "
    }
]
function showProducts() {
    let choice = prompt(`
           Mời bạn nhập lựa chọn:
        1. Các món ăn dân tộc kinh. 
        2. Các món ăn dân tộc mông.
        `)
    if (choice == 1) {
        let menu1 = products.filter(products => products.category == "Món ăn dân tộc kinh");
        console.log(menu1);
    } else if (choice == 2) {
        let menu2 = products.filter(products => products.category == "Món ăn dân tộc kinh");
        console.log(menu2);
    } else {
        console.log("Lựa chọn không hợp lệ ");
    }
}
function chooseProducts() {
    let chooseID = prompt(`Mời bạn nhập ID sản phẩm `);
    let index = products.findIndex(item => item.id === chooseID);
    if (!index) {
        console.log("Sản phẩm không có trong cửa hàng ");
    } else {
        let chooseQuantity = +prompt("Mời bạn nhập số lượng muốn mua");
        if (chooseQuantity <= 0) {
            console.log(`Lựa chọn không hợp lệ`);
        } else if (chooseQuantity > products.quantity) {
            console.log("Số lượng sản phẩm không đủ ");
        } else {
            // trù số lươg sản phẩm trong cửa hàng 
            index.quantity -= chooseQuantity;
            let index = carts.findIndex(item => item.id == chooseID);
            if (index == -1) {
                carts.push({
                    id: chooseID,
                    name: products[product].name,
                    quantity: chooseQuantity,
                    price: products[index].price,
                    category: products[index].category,
                })
                // carts.push({ ...products[index], quantity: chooseQuantity });
            } else {
                carts[index].quantity = carts[index].quantity + chooseQuantity;
                console.log(carts);

            }
            console.log(`Bạn đã mua hàng thành công: ${products.name}`);

        }
    }

}
/*
function handleSort (number.products){
    product.sort((a,b)=>{
        return number == 1 ? a.price-b.price : b.price-a.price
    })
}
    let choice =+ prompt(Nhập lựa chọn 1: Tăng hoặc 2: giảm);
    handleSort(choice.products);

*/
function sortProducts() {
    let choice = prompt(`
        Chọn cách sắp xếp:
        1. Giá tăng dần.
        2. Giá giảm dần.
    `);

    if (choice == 1) {
        let ascending = [...products].sort((a, b) => a.price - b.price);
        console.log("Sản phẩm sắp xếp theo giá tăng dần:", ascending);
    } else if (choice == 2) {
        let descending = [...products].sort((a, b) => b.price - a.price);
        console.log("Sản phẩm sắp xếp theo giá giảm dần:", descending);
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}

function calculateTotal() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống!");
        return;
    }
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log("Danh sách sản phẩm trong giỏ hàng:");
    cart.forEach(item => {
        console.log(`${item.name} - ${item.quantity} x ${item.price.toLocaleString()} VND`);
    });
    console.log(`Tổng số tiền cần thanh toán: ${total.toLocaleString()} VND`);
}


do {
    let choice = prompt(`
        1. Hiển thị các sản phẩm theo danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập ID.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá.
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.
        `)
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2: 
            chooseProducts();
            break;
        case 3:
            sortProducts();
            break;
        case 4:
            calculateTotal();
            break;
        case 5:
            console.log("Thoát");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");

            break;
    }
} while (choice == 6);