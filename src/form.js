import React, { Component } from 'react';
import Kavenegar from 'kavenegar'

const api = Kavenegar.KavenegarApi({
    apikey: '725834437131444F7A7A346271572B34434D6A3668773D3D'
})

class Form extends Component {
    state = {
            textSms:''
        }
   
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ textSms: '' }) 
        api.Send({
            message: "خدمات پیام کوتاه کاوه نگار",
            sender: "10009009909909",
            receptor: this.state.textSms
        },
        function(response, status) {
            console.log(response);
            console.log(status);
        })  
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                   type="text" 
                   value={this.state.textSms}
                   onChange={event => this.setState({ textSms: event.target.value })}
                   placeholder="09123456789" 
                />
                <button>ارسال لینک دانلود</button>
    	    </form>
        );
    }
}

export default Form