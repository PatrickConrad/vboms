function Body({page, styles}) {
    return (
        <div className={styles.global.app}>
            <main>
                {page}
            </main>
        </div>
    );
}

export default Body;