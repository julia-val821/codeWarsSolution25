https://www.codewars.com/kata/57d448c6ba30875437000138/train/javascript

    function roots(a,b,c){
        let discriminant;
        let x1;
        let x2;
        discriminant = (Math.pow(b, 2)) - 4 * a * c;
        if (discriminant < 0) {
            return null
        } else if ( discriminant >= 0) {
            x1 = (-b + (Math.sqrt(discriminant))) / (2 * a);
            x2 = (-b - (Math.sqrt(discriminant))) / (2 * a);
        }
        return +((x1 + x2).toFixed(2));
    }