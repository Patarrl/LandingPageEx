<script lang="ts">
    import Footer from "$lib/components/common/Footer.svelte";
    
</script>

<div class='w-full flex flex-col items-center z-[10000]'>
    <div class="w-full bg-primary-500 h-[20rem]"></div>
    <div class="flex justify-center w-full max-w-[800px]">
        <div class="w-full m-[-10rem] rounded-md shadow-lg text-black bg-white p-4 drop-shadow-xl">
            <div class="py-[56px] px-[64px]">
                
                <h1 class="text-[45px] mb-[2rem] font-semibold">Book An Appointment With Us</h1>
                <!-- Google Calendar Appointment Scheduling begin -->
<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1oC8iJDn3JAQeXSRZ-ZexOwnz27-5_fGjaMCUQvyPc2KoGQziXeH_T7lW6U5nTnVHxkw5p11Wl?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>
<!-- end Google Calendar Appointment Scheduling -->
            </div>
        </div>
    </div>
</div>
<div class="z-0">
    <Footer/>
</div>