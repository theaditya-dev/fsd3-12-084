<<<<<<< HEAD
const readline = require("readline");
const fs = require("fs");

const FILE = "product.json";

// Read cart
const getCart = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            try {
                resolve(JSON.parse(data));
            } catch (error) {
                reject(error);
            }
        });
    });
};

// Save cart
const saveCart = (myCart) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            FILE,
            JSON.stringify(myCart, null, 2),
            "utf8",
            (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        );
    });
};

// Add product
const addToCart = async (product) => {
    const myCart = await getCart();

    const isFound = myCart.find((item) => item.id === product.id);

    if (isFound) {
        isFound.qty += product.qty;
    } else {
        myCart.push(product);
    }

    await saveCart(myCart);

    console.log(
        `Product added/updated with ID ${product.id} into cart`
    );
};

// Remove product
const removeFromCart = async (pid) => {
    const data = await getCart();

    const newData = data.filter((item) => item.id !== pid);

    if (data.length === newData.length) {
        console.log("PID not found");
    } else {
        await saveCart(newData);
        console.log("Product deleted successfully");
    }
};

// Update quantity
const updateCart = async (pid, newQty) => {
    const data = await getCart();

    const product = data.find((item) => item.id === pid);

    if (!product) {
        console.log("PID not found");
        return;
    }

    product.qty = newQty;

    await saveCart(data);

    console.log("Product quantity updated successfully");
};

// Show cart
const showCart = async () => {
    const data = await getCart();

    console.table(data);

    const total = data.reduce(
        (t, item) => t + item.qty * item.price,
        0
    );

    console.log("You have to pay: Rs.", total);
};

// Main
const main = async () => {

    const cin = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (text) => {
        return new Promise((resolve) => {
            cin.question(text, resolve);
        });
    };

    let choice;

    do {
        console.log("\n==============================");
        console.log("      Welcome to Flipkart");
        console.log("==============================");

        console.log("1.......... Show cart");
        console.log("2.......... Add Product");
        console.log("3.......... Remove Product");
        console.log("4.......... Update Quantity");
        console.log("5.......... Checkout");

        choice = await question("Enter your choice: ");

        switch (Number(choice)) {

            // SHOW CART
            case 1:
                await showCart();
                break;

            // ADD PRODUCT
            case 2: {
                const data = await question(
                    "Enter id,name,price,qty: "
                );

                const [id, name, price, qty] = data
                    .split(",")
                    .map((item) => item.trim());

                const product = {
                    id: Number(id),
                    name: name,
                    price: Number(price),
                    qty: Number(qty)
                };

                await addToCart(product);
                break;
            }

            // REMOVE PRODUCT
            case 3: {
                const pid = await question(
                    "Enter product ID to remove: "
                );

                await removeFromCart(Number(pid));
                break;
            }

            // UPDATE QUANTITY
            case 4: {
                const pid = await question(
                    "Enter product ID: "
                );

                const newQty = await question(
                    "Enter new quantity: "
                );

                await updateCart(
                    Number(pid),
                    Number(newQty)
                );

                break;
            }

            // CHECKOUT
            case 5:         
                console.log("See you later!");
                break;

            default:
                console.log("Invalid choice! Try again.");
        }

    } while (Number(choice) !== 5);

    cin.close();
};

main().catch((error) => {
    console.log("Error:", error.message);
=======
const readline = require("readline");
const fs = require("fs");

const FILE = "product.json";

// Read cart
const getCart = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            try {
                resolve(JSON.parse(data));
            } catch (error) {
                reject(error);
            }
        });
    });
};

// Save cart
const saveCart = (myCart) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            FILE,
            JSON.stringify(myCart, null, 2),
            "utf8",
            (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        );
    });
};

// Add product
const addToCart = async (product) => {
    const myCart = await getCart();

    const isFound = myCart.find((item) => item.id === product.id);

    if (isFound) {
        isFound.qty += product.qty;
    } else {
        myCart.push(product);
    }

    await saveCart(myCart);

    console.log(
        `Product added/updated with ID ${product.id} into cart`
    );
};

// Remove product
const removeFromCart = async (pid) => {
    const data = await getCart();

    const newData = data.filter((item) => item.id !== pid);

    if (data.length === newData.length) {
        console.log("PID not found");
    } else {
        await saveCart(newData);
        console.log("Product deleted successfully");
    }
};

// Update quantity
const updateCart = async (pid, newQty) => {
    const data = await getCart();

    const product = data.find((item) => item.id === pid);

    if (!product) {
        console.log("PID not found");
        return;
    }

    product.qty = newQty;

    await saveCart(data);

    console.log("Product quantity updated successfully");
};

// Show cart
const showCart = async () => {
    const data = await getCart();

    console.table(data);

    const total = data.reduce(
        (t, item) => t + item.qty * item.price,
        0
    );

    console.log("You have to pay: Rs.", total);
};

// Main
const main = async () => {

    const cin = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (text) => {
        return new Promise((resolve) => {
            cin.question(text, resolve);
        });
    };

    let choice;

    do {
        console.log("\n==============================");
        console.log("      Welcome to Flipkart");
        console.log("==============================");

        console.log("1.......... Show cart");
        console.log("2.......... Add Product");
        console.log("3.......... Remove Product");
        console.log("4.......... Update Quantity");
        console.log("5.......... Checkout");

        choice = await question("Enter your choice: ");

        switch (Number(choice)) {

            // SHOW CART
            case 1:
                await showCart();
                break;

            // ADD PRODUCT
            case 2: {
                const data = await question(
                    "Enter id,name,price,qty: "
                );

                const [id, name, price, qty] = data
                    .split(",")
                    .map((item) => item.trim());

                const product = {
                    id: Number(id),
                    name: name,
                    price: Number(price),
                    qty: Number(qty)
                };

                await addToCart(product);
                break;
            }

            // REMOVE PRODUCT
            case 3: {
                const pid = await question(
                    "Enter product ID to remove: "
                );

                await removeFromCart(Number(pid));
                break;
            }

            // UPDATE QUANTITY
            case 4: {
                const pid = await question(
                    "Enter product ID: "
                );

                const newQty = await question(
                    "Enter new quantity: "
                );

                await updateCart(
                    Number(pid),
                    Number(newQty)
                );

                break;
            }

            // CHECKOUT
            case 5:         
                console.log("See you later!");
                break;

            default:
                console.log("Invalid choice! Try again.");
        }

    } while (Number(choice) !== 5);

    cin.close();
};

main().catch((error) => {
    console.log("Error:", error.message);
>>>>>>> 38fdb2a (new commit)
});