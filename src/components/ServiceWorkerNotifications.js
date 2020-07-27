import { Component } from 'react'

export default class ServiceWorkerNotifications extends Component {
  static defaultProps = {
    readyMessage: 'Trang Web này được xử lý để có thể hoạt động ngoại tuyến!',
    updatedMessage: 'Trang Web vừa mới cập nhật, vui lòng tải lại trang.',
    offlineMessage: 'Bạn đang ngoại tuyến, bạn không nhận được thông báo mới cho đến khi có kết nối mạng.',
    ready: false,
    updated: false,
    offline: false,
    reloadOnUpdate: true
  }

  state = {
    message: null
  }

  componentDidMount = () => {
    window.addEventListener('swReady', this.handleReady)
    window.addEventListener('swUpdated', this.handleUpdated)
    window.addEventListener('swOffline', this.handleOffline)
  }

  componentWillUnmount = () => {
    window.removeEventListener('swReady', this.handleReady)
    window.removeEventListener('swUpdated', this.handleUpdated)
    window.removeEventListener('swOffline', this.handleOffline)
  }

  reloadIfUpdated = () => {
    if (window.swUpdated) {
      console.log('Có nội dung mới, hãy làm mới ứng dụng!')
      window.location.reload()
    }
  }

  handleReady = () => {
    if (!this.props.ready) return
    this.setState({ message: this.props.readyMessage })
  }

  handleUpdated = () => {
    window.swUpdated = true
    console.log('Window will reload on next render')
    if (!this.props.updated) return
    this.setState({ message: this.props.updatedMessage })
  }

  handleOffline = () => {
    if (!this.props.offline) return
    this.setState({ message: this.props.offlineMessage })
  }

  handleDismiss = () => {
    this.setState({ message: null })
  }

  render () {
    this.props.reloadOnUpdate && this.reloadIfUpdated()
    return null
  }
}
