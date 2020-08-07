import React from 'react'
import PropTypes from 'prop-types'

const DashBoard = ({products}) => {
    return (
        <div>
            Sum: {products.length}
        </div>
    )
}

DashBoard.propTypes = {

}

export default DashBoard
