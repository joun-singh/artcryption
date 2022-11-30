import styles from "../styles/PriceInfo.module.css";

const PriceInfo = () => {
	return (
		<div className='flex flex-row gap-10'>
			<div>
				<button className='font-haffer bg-grey py-2 px-4 rounded text-2xl  font-medium'>
					Make Offer
				</button>
			</div>
			<div className='flex-1 text-right'>
				<button className='font-haffer bg-grey py-2 px-4 rounded text-2xl w-full font-medium'>
					Buy Now
				</button>
				<div className='flex flex-row gap-3 justify-end items-center'>
					<div>
						<input type='checkbox' id='priceIfo' />
					</div>
					<div>
						<label
							htmlFor='priceIfo'
							className={`${styles.price_check_label} font-kern mt-2`}>
							I agree to the TERMS OF SALE & artist terms
						</label>
					</div>
				</div>
				<div className='flex flex-row gap-3 justify-end items-center my-3 gap-12'>
                    <p className={`${styles.price_check_label} font-kern uppercase text-left`}>service fee</p>
                    <p className={`${styles.price_check_label} font-kern`}>2.5%</p>
                </div>
				<div className='flex flex-row gap-3 justify-end items-center gap-12'>
                <p className={`${styles.price_check_label} font-kern uppercase text-left`}>resale royalty</p>
                    <p className={`${styles.price_check_label} font-kern`}>10%</p>
                </div>

			</div>
		</div>
	);
};

export default PriceInfo;
