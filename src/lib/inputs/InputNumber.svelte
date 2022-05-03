<div >
    <input class="number-input"  placeholder="0"/>
    <button class="text">max</button>
</div>

<style>
    div{
        position: relative;
    }
    input{
        width: 100%;
    }
    button{
        color: var(--primary-color);
        font-size: var(--units-08vw);
        font-weight: 200;
        position: absolute;
        top: 50%;
        transform: translate(-150%, -50%)
    }
    @media (max-width: 480px) {
        button{
            font-size: 3vw;
        }
    }
</style>
