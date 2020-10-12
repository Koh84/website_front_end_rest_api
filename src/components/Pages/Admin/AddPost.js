import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import * as AdminActions from '../../../store/actions/adminActions';
import Paper from '@material-ui/core/Paper';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';

const styles = theme => ({
    container: {
        margin: theme.spacing.unit * 3
    },
    formControl: {
        margin: theme.spacing.unit
    }
})

const mapStateToProps = state => ({
    auth: state.auth,
    admin: state.admin
});

const mapDispatchToProps = dispatch => ({

});

class AddPost extends Component {
    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
            <h1>Add Post</h1>
            <Form>
                <FormikTextField 
                    name="title"
                    label="Title"
                    margin="normal"
                    onChange={e=> this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g, '_'))}
                    fullWidth
                />
                <FormikTextField 
                    name="slug"
                    label="Slug"
                    margin="normal"
                />
                <FormikTextField 
                    name="content"
                    label="Content"
                    margin="normal"
                    fullWidth
                />
            </Form>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        title: '',
        slug: '',
        createdAt: '',
        status: false,
        content: ''
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string().required('Title is required'),
        slug: Yup.string().required(),
        content: Yup.string().required()
    }),
    handleSubmit: (values, { setSubmitting }) => {
        
    }
})(withStyles(styles)(AddPost)));