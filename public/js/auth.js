
export const supabase = window.supabase.createClient('https://idtiohrkbkotgjsbgcij.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkdGlvaHJrYmtvdGdqc2JnY2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMTI4MjgsImV4cCI6MjA1Mjc4ODgyOH0.JVeYsapCa4SgTMqs89vfWA0Nke5oAQmHUPmjhDulea4')

export const signUpUser = async (userEmail, userPassword) => {
    const { data, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
        options: {
            data: {
                first_name: firstName,
                age: age,
                // style: style,
                // theme: theme
            }
        }
    });

    if (error) {
        console.error('Error creating user:', error);
        return;
    } else {
        console.log('User data:', data);
    }
}

export const signInWithEmail = async (emailInput, passwordInput) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput,
        password: passwordInput,
    })

    if (error) {
        console.error('Error creating user:', error);
        return;
    } else {
        console.log('User data:', data);
        window.location.href = "public/views/dashboard.html";
    }

}
