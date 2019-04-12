import { FormAdd, FormSubtract } from 'grommet-icons';
import React from 'react';

// Navigation Bar Themes
export const NAV_BAR_THEME = {
    global: {
      font: {
        family: 'Segoe UI Light',
      },
    },
    anchor : {
        fontWeight: 450, 
        color: {
            light : '#3c3d3f'
        },
        hover: {
            textDecoration : 'none',
            extend : {
                color : '#cfd0d3'
            }
        }
    }
};

// Global Image Themes
export const IMAGE_MARGIN = {
    top: 'small',
};

const baseSpacing = 24;

export const IMAGE_GROMMET_THEME = {
    global: {
        size: {
            medium: `${baseSpacing * 20}px`
        }
    }
};

// Home Page Themes
export const HOME_CONTENT_THEME = {
    global: {
        font: {
            family: 'Segoe UI Light',
        },
    },
    heading: {
        weight: 500,
        extend: {
            color: '#5a5b5b'
        }        
      },
};

export const HOME_CONTENT_MARGIN = {
    bottom: 'small'
};

// About Page Themes
export const ABOUT_THEME = {
    global: {
        font: {
            family: 'Segoe UI Light',
        },
    },
    heading: {
        weight: 500,
        extend: {
            color: '#5a5b5b'
        }        
      },
};


export const ABOUT_PRODUCT_THEME = {
    heading: {
        font: {
            family: 'Segoe UI Light',
        },
        weight: 500,
        extend: {
            color: 'light-1'
        }
    }
};


export const VIDEO_UPLOAD_THEME = {
    heading: {
        font: {
            family: 'Segoe UI Light',
        },
        weight: 500,
        extend: {
            color: '#5a5b5b'
        }
    }
};


// Dashboard Theme
export const DASHBOARD_THEME = {
    global: {
        font: {
            family: 'Segoe UI Light',
        },
    },
    heading: {
        font: {
            family: 'Segoe UI Light',
        },
        weight: 500,
        extend: {
            color: '#646566'
        }
    },
    
};


export const DASHBOARD_ACCORDIAN_THEME = {
    accordion: {
      icons: {
        collapse: FormSubtract,
        expand: FormAdd,
        color: {
            light: '#3c3d3f'
        }
      }
    }
  };


  export const DASHBOARD_VIDEO_THEME = {
    box: {
        size: {
            medium: '25px'
        }
    }
  }