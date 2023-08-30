<script lang="ts">
    import Footer from "$lib/components/common/Footer.svelte";
    const country = [
        {
            title:"Please Select A Country",
            value:"0"
        },  {
            title:"Philippines",
            value:"1"
        },{
            title:"Japan",
            value:"2"
        },  {
            title:"France",
            value:"3"
        },{
            title:"Mexico",
            value:"4"
        },  {
            title:"Spain",
            value:"5"
        }, {
            title:"United States",
            value:"6"
        }
    ]

    let policy = false
    let name = ""
    let email = ""
    let phoneNumber = ""
    let message = ""
    let submit = false
    let companyName = "" 

    const validateEmail = (email: string) => {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase()) 
    }
    const validatePhoneNumber = (number: any) => {
        let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return phoneRegex.test(number)
    }

    const handleSubmit = () => {
        submit=true;
        if (isValidEmail && isValidName && isValidMessage && isValidPhone && isValidCountry) {
            alert("Message Has Been Submitted")
        }

        let body = {
            policy,
            name, 
            email, 
            phoneNumber,
            message,
            submit,
            companyName
        }

        fetch('', {
            method: "POST",
            body: JSON.stringify(body),
        }).then(res => res.json()).then(data => {
            // do something with the data
            if (data.success) {
                window.location.href = '/contact/success'
            } else {
                alert("There was an error!")
            }
        })
    }

    $: isValidName = name.length > 0
    $: isValidEmail = validateEmail(email)
    $: isValidPhone = validatePhoneNumber(phoneNumber) && phoneNumber.length > 10
    $: isValidMessage = message.length > 0
    $: isValidCountry = country //fix
</script>

<div class='w-full flex flex-col items-center z-[10000]'>
    <div class="w-full bg-primary-500 h-[20rem]"></div>
    <div class="flex justify-center w-full max-w-[800px]">
        <div class="w-full m-[-10rem] rounded-md shadow-lg text-black bg-white p-4 drop-shadow-xl">
            <div class="py-[56px] px-[64px]">
                <h1 class="text-[45px] mb-[2rem] font-semibold">Contact Us</h1>
                <div class="my-[10px] text-[18px]">
                    <span>Name</span><span class="text-red-500 text-[20px] pl-[3px]">*</span>
                </div>
                <input class="w-full rounded-lg text-[18px]" bind:value={name} title="Input (text)" type="text" placeholder="" />
                {#if submit && !isValidName}
                <p class="text-red-500">Please Enter your Name Here</p>
                {/if}
                <div class="my-[10px] text-[18px]">
                    <span>Corporate Email</span><span class="text-red-500 text-[20px] pl-[3px]">*</span>
                </div>
                <input class="w-full rounded-lg text-[18px]" bind:value={email} title="Input (text)" type="text" placeholder="" />
                {#if submit && !isValidEmail}
                <p class="text-red-500">Invalid Email</p>
                {/if}
                <div class="my-[10px] text-[18px]">
                    <span>Country</span><span class="text-red-500 text-[20px] pl-[3px]">*</span>
                </div>
                <select class="w-full rounded-lg text-[18px]" title="Input (text)" placeholder="">
                    {#each country as country}
                    <option value={country.value}>
                        {country.title}
                    </option>
                    {/each}
                </select>
                {#if submit && !isValidCountry}
                <p class="text-red-500">Please Select a Country</p>
                {/if}
                <div class="my-[10px] text-[18px]">
                    <span>Phone</span><span class="text-red-500 text-[20px] pl-[3px]">*</span>
                </div>
                <input class="w-full rounded-lg text-[18px]" bind:value={phoneNumber} title="Input (text)" type="text" placeholder="+1-000-000-0000" />
                {#if submit && !isValidPhone}
                <p class="text-red-500">Invalid Phone Number</p>
                {/if}
                <div class="flex justify-between my-[10px] text-[18px]">
                    <span>Company Name</span>
                    <span class="opacity-50">Optional</span>
                </div>
                <input class="w-full rounded-lg text-[18px]" bind:value={companyName} title="Input (text)" type="text" placeholder="" />
                <div class="my-[10px] text-[18px]">
                    <span>Message</span><span class="text-red-500 text-[20px] pl-[3px]">*</span>
                </div>
                <textarea class="w-full rounded-lg text-[18px]" bind:value={message} title="Input (text)" placeholder="Please Write Your Message Here..." rows="4"/>
                {#if submit && !isValidMessage}
                <p class="text-red-500">Please Enter a Message Here</p>
                {/if}
                <span class="text-red-500">* Required</span>
                <div class="my-[10px]">
                    <input class="" type="checkbox" bind:checked={policy}><span class="ml-[1rem]" >I agree to the Terms of Service and Privacy Policy</span>
                </div>
                <button class="btn btn-lg bg-orange-500 rounded-md w-full text-white mt-[10px]" on:click={handleSubmit} disabled={!policy}>Send Message</button>
            </div>
        </div>
    </div>
</div>
<div class="z-0">
    <Footer/>
</div>