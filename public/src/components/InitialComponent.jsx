import React, { Component } from 'react'

class InitialComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            diagnosis: 0.372583,
            radius_mean: 14.127292,
            texture_mean: 19.289649,
            perimeter_mean: 91.969033,
            area_mean: 654.889104,
            smoothness_mean: 0.096360,
            compactness_mean: 0.104341,
            concavity_mean: 0.088799,
            concave_points_mean: 0.048919,
            symmetry_mean: 0.181162,
            fractal_dimension_mean: 0.062798
        }
        this.analyseData = this.analyseData.bind(this);
    }

    analyseData() {
        this.props.history.push('/analyse-data');
    }

    render() {
        return(
            <div>
                <h2 className="text-center">Default Parameters List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.analyseData}>Analyse Image</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>Diagnosis:</td>
                                <td>{this.state.diagnosis}</td>
                            </tr>
                            <tr>
                                <td>Radius mean:</td>
                                <td>{this.state.radius_mean}</td>
                            </tr>
                            <tr>
                                <td>Perimeter mean:</td>
                                <td>{this.state.perimeter_mean}</td>
                            </tr>
                            <tr>
                                <td>Area mean:</td>
                                <td>{this.state.area_mean}</td>
                            </tr>
                            <tr>
                                <td>Smoothness mean:</td>
                                <td>{this.state.smoothness_mean}</td>
                            </tr>
                            <tr>
                                <td>Compactness mean:</td>
                                <td>{this.state.compactness_mean}</td>
                            </tr>
                            <tr>
                                <td>Concavity mean:</td>
                                <td>{this.state.concavity_mean}</td>
                            </tr>
                            <tr>
                                <td>Concave points mean:</td>
                                <td>{this.state.concave_points_mean}</td>
                            </tr>
                            <tr>
                                <td>Symmetry mean:</td>
                                <td>{this.state.symmetry_mean}</td>
                            </tr>
                            <tr>
                                <td>Fractal dimension mean:</td>
                                <td>{this.state.fractal_dimension_mean}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export default InitialComponent
