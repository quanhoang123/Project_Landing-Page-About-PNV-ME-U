import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Notificate.css';
export default class Notificate extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div > {/* //<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button> */}
                <div ><i class="fa fa-bell" type="button" id="notificate"  data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" aria-hidden="true"></i></div>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Passerelles numériques Vietnam</h5><br></br>
                               
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <i>Bạn sẽ nhận được thông báo mới nhất từ Passerelles numériques Vietnam</i>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Email:</label>
                                        <input type="email" class="form-control" id="recipient-name" placeholder="abc@gmail.com"/>
                                        {/* <textarea class="form-control" id="message-text"></textarea> */}
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Success</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
