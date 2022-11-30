const ShotDescription = ({title,children}) => {
 return(
    <>
        <h6 className="uppercase text-lg font-haffer">{title}</h6>
        <p className=" text-sm font-kern mt-5">{children}</p>
    </>
 )
}

export default ShotDescription