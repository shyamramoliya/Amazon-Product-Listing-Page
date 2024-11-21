const products = [
    {
        id: 1,
        name: "Noise earbuds",
        price: 5.00,
        rating: 4.0,
        image: "noise earbuds.jfif",
    },
    {
        id: 2,
        name: "Haier fridge",
        price: 200.00,
        rating: 4.5,
        image: "haier fridge.jfif",
    },
    {
        id: 3,
        name: "Checked Shirt",
        price: 9.99,
        rating: 5.0,
        image: "shirt.jfif",
    },
    {
        id: 4,
        name: "Titan watch",
        price: 24.99,
        rating: 3.5,
        image: "Titan image.jfif",
    },
    {
        id: 5,
        name: "Oversized Tshirt",
        price: 6.50,
        rating: 3.0,
        image: "oversized.jfif",
    },
    {
        id: 6,
        name: "Sketchers shoes",
        price: 27.99,
        rating: 4.0,
        image: "boot.jfif",
    },
    {
        id: 7,
        name: "Tommy Hilfiger belt",
        price: 9.99,
        rating: 4.5,
        image: "belt.jfif",
    },
    {
        id: 8,
        name: "Van heusen wallet",
        price: 14.99,
        rating: 4.5,
        image: "wallet.jfif",
    },
    {
        id: 9,
        name: "Saint laurent heels",
        price: 99.99,
        rating: 5.0,
        image: "heels.jfif",
    },
    {
        id: 10,
        name: "Dior bag",
        price: 249.99,
        rating: 4.5,
        image: "dior.jfif",
    },
    {
        id: 11,
        name: "Iphone 15pro",
        price: 105.00,
        rating: 4.0,
        image: "phone.jfif",
    },
    {
        id: 12,
        name: "Suit",
        price: 200.00,
        rating: 4.5,
        image: "suit.jfif",
    },
    {
        id: 13,
        name: "Nike Socks",
        price: 9.99,
        rating: 5.0,
        image: "socks.jfif",
    },
    {
        id: 14,
        name: "Guess watch",
        price: 79.99,
        rating: 3.5,
        image: "guess.jfif",
    },
    {
        id: 15,
        name: "Sport Tshirt",
        price: 6.50,
        rating: 3.0,
        image: "sport.jfif",
    },
    {
        id: 16,
        name: "lord piana shoes",
        price: 277.99,
        rating: 4.0,
        image: "loro piana.jfif",
    }
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCounts();
});

function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating} ⭐</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        `;
        productGrid.appendChild(productCard);
    });
}

function addToCart(productId) {
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCounts();
    }
}

function addToWishlist(productId) {
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateCounts(); 
    }
}

function updateCounts() {
    document.getElementById("cart-count").innerText = ` ${cart.length}`;
    document.getElementById("wishlist-count").innerText = ` ${wishlist.length}`;
} 