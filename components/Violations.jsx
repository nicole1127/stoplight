import styles from "./Violations.module.css";

const Violations = () => {
    return (
        <div className={styles.main_content}>
        <div className={styles.header} >Violations</div>  
        <div className={styles.info}> 
        <div className={styles.taas}>
          <h3 className={styles.show}>Show</h3>
          <input className={styles.input} ></input>
          <div className={styles.entry}>
            <h3 className={styles.entries}>entries</h3>
          </div>
          <div className={styles.search}>
            <label className={styles.label}>Search: </label>
            <input className={styles.inputsearch}></input>
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th} >#</th>
                <th className={styles.th} >Plate Number</th>
                <th className={styles.th} >Date / Time</th>
                <th className={styles.th} >Location</th>
                <th className={styles.th} >Violation Type</th>
                <th className={styles.th} >Status</th>
                <th className={styles.th} >Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ><button><img className={styles.eye} src="/images/body-eye.png" alt="violation_icon"></img></button></td>
            </tr>
            <tr>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
            </tr>
            <tr>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
            </tr>
            <tr>
              <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
            </tr>
            <tr>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
            </tr>
            <tr>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
                <td className={styles.td} ></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>


    );
  };
    
  export default Violations;