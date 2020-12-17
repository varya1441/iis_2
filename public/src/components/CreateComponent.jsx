import React, { Component } from 'react'

class CreateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            file: null,
            diagnosis: null,
            radius_mean: null,
            texture_mean: null,
            perimeter_mean: null,
            area_mean: null,
            smoothness_mean: null,
            compactness_mean: null,
            concavity_mean: null,
            concave_points_mean: null,
            symmetry_mean: null,
            fractal_dimension_mean: null
        }
        this.changeDiagnosisHandler = this.changeDiagnosisHandler.bind(this);
        this.changeRadiusMeanHandler = this.changeRadiusMeanHandler.bind(this);
        this.changeTextureMeanHandler = this.changeTextureMeanHandler.bind(this);
        this.changePerimeterMeanHandler = this.changePerimeterMeanHandler.bind(this);
        this.changeAreaMeanHandler = this.changeAreaMeanHandler.bind(this);
        this.changeSmoothnessMeanHandler = this.changeSmoothnessMeanHandler.bind(this);
        this.changeCompactnessMeanHandler = this.changeCompactnessMeanHandler.bind(this);
        this.changeConcavityMeanHandler = this.changeConcavityMeanHandler.bind(this);
        this.changeConcavePointsMeanHandler = this.changeConcavePointsMeanHandler.bind(this);
        this.changeSymmetryMeanHandler = this.changeSymmetryMeanHandler.bind(this);
        this.changeFractalDimensionMeanHandler = this.changeFractalDimensionMeanHandler.bind(this);
        this.saveData = this.saveData.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    saveData = (event) => {
        event.preventDefault();
        let data =  "diagnosis," + this.state.diagnosis + "\n" +
                    "radius_mean," + this.state.radius_mean + "\n" +
                    "texture_mean," + this.state.texture_mean + "\n" +
                    "perimeter_mean," + this.state.perimeter_mean + "\n" +
                    "area_mean," + this.state.area_mean + "\n" +
                    "smoothness_mean," + this.state.smoothness_mean + "\n" +
                    "compactness_mean," + this.state.compactness_mean + "\n" +
                    "concavity_mean," + this.state.concavity_mean + "\n" +
                    "concave_points_mean," + this.state.concave_points_mean + "\n" +
                    "symmetry_mean," + this.state.symmetry_mean + "\n" +
                    "fractal_dimension_mean," + this.state.fractal_dimension_mean + "\n";
        console.log(data);
        this.downloadTxtFile(data);
        this.props.history.push('/')
    }

    downloadTxtFile = (data) => {
        const element = document.createElement("a");
        const file = new Blob([data], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "data.csv";
        element.click();
    }

    changeDiagnosisHandler = (event) => {
        this.setState({diagnosis: event.target.value})
    }

    changeRadiusMeanHandler = (event) => {
        this.setState({radius_mean: event.target.value})
    }

    changeTextureMeanHandler = (event) => {
        this.setState({texture_mean: event.target.value})
    }

    changePerimeterMeanHandler = (event) => {
        this.setState({perimeter_mean: event.target.value})
    }

    changeAreaMeanHandler = (event) => {
        this.setState({area_mean: event.target.value})
    }

    changeSmoothnessMeanHandler = (event) => {
        this.setState({smoothness_mean: event.target.value})
    }

    changeCompactnessMeanHandler = (event) => {
        this.setState({compactness_mean: event.target.value})
    }

    changeConcavityMeanHandler = (event) => {
        this.setState({concavity_mean: event.target.value})
    }

    changeConcavePointsMeanHandler = (event) => {
        this.setState({concave_points_mean: event.target.value})
    }

    changeSymmetryMeanHandler = (event) => {
        this.setState({symmetry_mean: event.target.value})
    }

    changeFractalDimensionMeanHandler = (event) => {
        this.setState({fractal_dimension_mean: event.target.value})
    }

    cancel() {
        this.props.history.push('/')
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Analyse Image</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <input type="file" onChange={this.handleChange}/>
                                            <img height="80%" width="80%" src={this.state.file}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Diagnosis (Greater/Less): </label>
                                            <input placeholder="0.372583" name="diagnosis" className="form-control"
                                                    value={this.state.diagnosis} onChange={this.changeDiagnosisHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Radius Mean (Greater/Less): </label>
                                            <input placeholder="14.127292" name="radius_mean" className="form-control"
                                                    value={this.state.radius_mean} onChange={this.changeRadiusMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Texture Mean (Greater/Less): </label>
                                            <input placeholder="19.289649" name="radius_mean" className="form-control"
                                                    value={this.state.texture_mean} onChange={this.changeTextureMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Perimeter Mean (Greater/Less): </label>
                                            <input placeholder="91.969033" name="perimeter_mean" className="form-control"
                                                    value={this.state.perimeter_mean} onChange={this.changePerimeterMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Area Mean (Greater/Less): </label>
                                            <input placeholder="654.889104" name="area_mean" className="form-control"
                                                    value={this.state.area_mean} onChange={this.changeAreaMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Smoothness Mean (Greater/Less): </label>
                                            <input placeholder="0.096360" name="smoothness_mean" className="form-control"
                                                    value={this.state.smoothness_mean} onChange={this.changeSmoothnessMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Compactness Mean (Greater/Less): </label>
                                            <input placeholder="0.104341" name="compactness_mean" className="form-control"
                                                    value={this.state.compactness_mean} onChange={this.changeCompactnessMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Concavity Mean (Greater/Less): </label>
                                            <input placeholder="0.088799" name="concavity_mean" className="form-control"
                                                    value={this.state.concavity_mean} onChange={this.changeConcavityMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Concave Points Mean (Greater/Less): </label>
                                            <input placeholder="0.048919" name="concave_points_mean" className="form-control"
                                                    value={this.state.concave_points_mean} onChange={this.changeConcavePointsMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Symmetry Mean (Greater/Less): </label>
                                            <input placeholder="0.181162" name="symmetry_mean" className="form-control"
                                                    value={this.state.symmetry_mean} onChange={this.changeSymmetryMeanHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label> Fractal Dimension Mean (Greater/Less): </label>
                                            <input placeholder="0.062798" name="fractal_dimension_mean" className="form-control"
                                                    value={this.state.fractal_dimension_mean} onChange={this.changeFractalDimensionMeanHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveData}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateComponent