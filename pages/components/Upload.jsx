import "../styles/Upload.css"

function Upload(){
    return (
    <div className="body123">
        <div className="container">
            <form id="uploadForm" >
                <h1 className="carousel-header">UPLOAD</h1>
                <label>Subject: <input type="text" id="subject" className="upload-input"required/></label>
                <label>Section: <input type="text" id="section" className="upload-input" required/></label>
                <label>Year: <input type="text" id="year" className="upload-input" required/></label>
                <label>Exam Type: <input type="text" id="examType" className="upload-input" required/></label>
                <label>File: <input type="file" id="fileUrl" className="upload-input" required/></label>
                <button type="submit" className="upload-box-button">Upload</button>
                <input type="reset" id="reset" className="upload-box-button"/>
            </form>
        </div>
    </div>
    );
}
export default Upload