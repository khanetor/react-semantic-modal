React Modal for Semantic UI
===========================

##### Dependencies:
- Webpack
- Webpack dev server
- Babel loader
- React
- React Portal
- Semantic UI

##### Install:
    npm install --save react-semantic-modal

    <!-- include semantic stylesheet in your html -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/semantic-ui/2.0.8/semantic.min.css">

    <!-- include jquery and semantic javascript in your html -->
    <script src="//cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/semantic-ui/2.0.8/semantic.min.js"></script>

##### Usage:
> Please see `build/index.html` and `src/components/index.jsx` for example. Include Semantic UI css and javascript, and jQuery.

    Modal.propTypes = {
      trigger: PropTypes.element,
      isOpened: PropTypes.bool,
      closeOnEsc: PropTypes.bool,
      closeOnOutsideClick: PropTypes.bool,
      onClose: PropTypes.func,
      children: PropTypes.element.isRequired,
      style: PropTypes.oneOf(['standard', 'basic']),
      size: PropTypes.oneOf(['', 'small', 'large', 'fullscreen'])
    };
    Modal.defaultProps = {
      closeOnEsc: true,
      closeOnOutsideClick: true,
      style: 'standard',
      size: ''
    };
