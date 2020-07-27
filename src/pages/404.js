import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import AlertTriangle from 'react-feather/dist/icons/alert-triangle'

import Layout from '../components/Layout'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <title>404 – Lỗi</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter">
            <p>
              <AlertTriangle size="5rem" />
            </p>
            <h1>404 - Trang không tồn tại hoặc có thể bị xóa</h1>
            <p>
              Tớ không thể tìm thấy trang này trong hệ thống của mình. Bạn hãy xem lại địa chỉ có đúng không.
              <br />
              Nếu bạn nghĩ đây là một lỗi, vui lòng hãy nhắn tin cho mình. Fb: <a href="https://facebook.com/bunnyMC.2508/">Nguyễn Hải Đăng</a> 
              <br />
              Head back to{' '}
              <Link to="/">{_get(data, 'globalSettings.siteTitle')}</Link>
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
)
