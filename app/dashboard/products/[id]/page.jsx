import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/iphone.jpeg" alt="" fill />
                </div>
                IPhone 15 Pro
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="IPhone" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$999" />
                    <label>Stock</label>
                    <input type="password" name="stock" placeholder="23" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="Titanium" />
                    <label>Size</label>
                    <textarea type="text" name="Size" placeholder=" 6.1-inch" />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description:</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows="10"
                        placeholder="Description..."
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;