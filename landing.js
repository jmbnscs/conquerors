window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    let header_bg = document.getElementById('masthead');
    // let randomNum = Math.floor(Math.random() * 10);
    // header_bg.style.backgroundImage = "url('images/head" + randomNum + ".jpg')";

    function changeImage(i) {   
        var BackgroundImg=[
            "images/head0.JPG",
            "images/head1.JPG",
            "images/head2.JPG",
            "images/head3.JPG",
            "images/head4.JPG",
            "images/head5.JPG",
            "images/head6.JPG",
            "images/head7.JPG",
            "images/head8.JPG",
            "images/head9.JPG",
            "images/head10.JPG",
        ];
        var i = Math.floor((Math.random() * 11));
        header_bg.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }

    window.setInterval(changeImage, 15000);

    // let counter = 0;
    // while(true) {
    //     window.setInterval(changeImage(counter), 5000);
    //     counter += 1;
    //     if (counter == 10) {
    //         counter = 0;
    //     }
    // }

    // for(var i = 0; i <= 10; i++) {
    //     var BackgroundImg = "images/head" + i + ".jpg";
    //     window.setInterval(changeImage(i), 5000);
    //     if (i == 10) {
    //         i = 0;
    //     }
    // }


    getCredentials();
});

function getCredentials() {
    let creds = {
        acct_1: {
            username: "hannahbustamante",
            password: "password6"
        },
        acct_2: {
            username: "goriosuaperoii",
            password: "password1"
        },
        acct_3: {
            username: "tomriocasa",
            password: "password2"
        },
        acct_4: {
            username: "elaizananadiego",
            password: "password3"
        },
        acct_5: {
            username: "juliagarol",
            password: "password4"
        },
        acct_6: {
            username: "lancecruz",
            password: "password5"
        }
    };

    let values = Object.values(creds);
    let randomIndex = Math.floor(Math.random() * values.length);
    let randomValue = values[randomIndex];

    document.getElementById('customer_username').innerHTML = randomValue.username;
    document.getElementById('customer_password').innerHTML = randomValue.password;
}
