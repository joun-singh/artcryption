import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from "../styles/Home.module.css";

const Layout = ({children}) => {
    return(
        <div className='lg:container lg:mx-auto'>
        
        <Header/>
           {children} 

           <footer className={styles.footer}>
				<Footer />
				<div className="grid h-48 place-items-center">
					<p className="font-haffer text-base uppercase">no previous price history</p>
				</div>
			</footer>
        
        </div>
    )
}

export default Layout