import styles from "./Violations.module.css";

const Violations = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_label}>
        <h3> Violations </h3>
      </div>
      <div className={styles.divtable}>
        
        <div className={styles.divcontent1}>
          <div className={styles.inner1}>
            <label> Show </label>
            <select></select>
            <label> entries </label>
          </div>
        </div>

        <div className={styles.divcontent2}>
          <div className={styles.inner2}>
            <label> Search </label>
            <input></input>
          </div>
        </div>
        
        <div className={styles.divcontent3}>
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
    </div>
  )
}


export default Violations;
