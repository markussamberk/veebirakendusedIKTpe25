function näitaValikuid()
{
    const muusikud = document.getElementsByName('muusikud');
    const valitud = [];

    for (let i = 0; i < muusikud.length; i++)
    {
        if (muusikud[i].checked)
        {
            valitud.push(muusikud[i].value);
        }
    }

    const valikuDiv = document.getElementById('valitudMuusikud');

    if (valitud.length === 0)
    {
        valikuDiv.innerHTML = 'Pole veel midagi valitud';
    }
    else if (valitud.length === 1)
    {
        valikuDiv.innerHTML = `Sinu valitud muusik: ${valitud[0]}`;
    }
    else
    {
        valikuDiv.innerHTML = `Sinu valitud muusikud: ${valitud.join(', ')}`;
    }
}




function näitaArvamust()
{
    const textarea = document.getElementById('koolis');
    const arvamusDiv = document.getElementById('arvamus');
    const tekst = textarea.value;

    if (tekst === '')
    {
        arvamusDiv.innerHTML = 'Kirjuta midagi...';
    }
    else
    {
        arvamusDiv.innerHTML = `"Sinu arvamus: ${tekst}"`;
    }
}





function näitaTunde()
{
    const slider = document.getElementById('tunnid');
    const vastusSpan = document.getElementById('tunnidVastus');
    const kuulamiseDiv = document.getElementById('kuulamiseTunnid');

    const tunnid = slider.value;
    vastusSpan.textContent = tunnid;

    kuulamiseDiv.innerHTML = `Sa kuulad muusikat ${tunnid} tundi päevas`

}


function näitaJah()
{
    document.getElementById('raadioVastus').innerHTML = 'Raadio kuulamine: jah';
}

function näitaEi()
{
    document.getElementById('raadioVastus').innerHTML = 'Raadio kuulamine: ei';
}


function näitaJaamu()
{
    const tekst = document.getElementById('jaamad').value;
    const jaamadeDiv = document.getElementById('nimetatudJaamad');

    if (tekst.trim() === '')
    {
        jaamadeDiv.innerHTML = '';
    }
    else
    {
        jaamadeDiv.innerHTML = 'Sinu nimetatud jaamad: ' + tekst;
    }
}




function näitaStiili()
{
    const stiilid = document.getElementsByName('muusikaStiil');
    const stiiliDiv = document.getElementById('valitudStiil');

    for (let i = 0; i < stiilid.length; i++)
    {
        if (stiilid[i].checked)
        {
            stiiliDiv.innerHTML = 'Sinu vastus: ' + stiilid[i].value;
            return;
        }
    }

    stiiliDiv.innerHTML = '';
}





function näitaKokkuvõtet()
{
    // 1.
    let muusikud = [];
    const cb = document.getElementsByName('muusikud');
    for (let i = 0; i < cb.length; i++)
    {
        if (cb[i].checked)
        {
            muusikud.push(cb[i].value);
        }
    }

    let muusikudTekst = muusikud.join(', ');
    if (muusikudTekst === '') muusikudTekst = 'Pole valitud';

    // 2.
    let arvamus = document.getElementById('koolis').value;
    if (arvamus === '') arvamus = 'Pole kirjutatud';

    // 3.
    let tunnid = document.getElementById('tunnid').value;

    // 4.
    let raadio = 'Pole valitud';
    const raadioNupud = document.getElementsByName('raadio');
    for (let i = 0; i < raadioNupud.length; i++)
    {
        if (raadioNupud[i].checked)
        {
            raadio = raadioNupud[i].value === 'jah' ? 'Jah' : 'Ei';
            break;
        }
    }

    // 5.
    let jaamad = document.getElementById('jaamad').value;
    if (jaamad === '') jaamad = 'Pole nimetatud';

    // 6.
    let stiil = 'Pole valitud';
    const stiilid = document.getElementsByName('muusikaStiil');
    for (let i = 0; i < stiilid.length; i++)
    {
        if (stiilid[i].checked)
        {
            stiil = stiilid[i].value;
            break;
        }
    }

    // Kokkuvõte
    document.getElementById('kokkuvõte').innerHTML =
        '<h3>Sinu vastused:</h3>' +
        '<p><strong>1. Muusikud:</strong> ' + muusikudTekst + '</p>' +
        '<p><strong>2. Arvamus:</strong> ' + arvamus + '</p>' +
        '<p><strong>3. Tunnid:</strong> ' + tunnid + ' tundi</p>' +
        '<p><strong>4. Raadio:</strong> ' + raadio + '</p>' +
        '<p><strong>5. Raadiojaamad:</strong> ' + jaamad + '</p>' +
        '<p><strong>6. Stiil:</strong> ' + stiil + '</p>';
}




function puhastaVorm()
{
    const muusikud = document.getElementsByName('muusikud');
    for (let i = 0; i < muusikud.length; i++)
    {
        muusikud[i].checked = false;
    }

    document.getElementById('koolis').value = '';

    const slider = document.getElementById('tunnid');
    slider.value = '2';
    document.getElementById('tunnidVastus').textContent = '2';

    const raadio = document.getElementsByName('raadio');
    for (let i = 0; i < raadio.length; i++)
    {
        raadio[i].checked = false;
    }

    document.getElementById('jaamad').value = '';

    const stiilid = document.getElementsByName('muusikaStiil');
    for (let i = 0; i < stiilid.length; i++)
    {
        stiilid[i].checked = false;
    }

    document.getElementById('valitudMuusikud').innerHTML = '';
    document.getElementById('arvamus').innerHTML = '';
    document.getElementById('kuulamiseTunnid').innerHTML = '';
    document.getElementById('raadioVastus').innerHTML = '';
    document.getElementById('nimetatudJaamad').innerHTML = '';
    document.getElementById('valitudStiil').innerHTML = '';

    document.getElementById('kokkuvõte').innerHTML = '';
}