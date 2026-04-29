const productDetailsMap = {
    "Retatrutide (American)": {
        title: "RETATRUTIDE (AMERICAN)",
        classification: "Triple receptor agonist (GLP-1 / GIP / Glucagon)",
        form: "Lyophilized powder",
        description: "Retatrutide is a synthetic peptide that simultaneously targets three incretin-related receptors — GLP-1R, GIPR, and GcgR. It is among the most structurally complex multi-agonist peptides currently under active pharmaceutical investigation. Imported from USA."
    },
    "Retatrutide (Chinese)": {
        title: "RETATRUTIDE (CHINESE)",
        classification: "Triple receptor agonist (GLP-1 / GIP / Glucagon)",
        form: "Lyophilized powder",
        description: "Retatrutide is a synthetic peptide that simultaneously targets three incretin-related receptors — GLP-1R, GIPR, and GcgR. It is among the most structurally complex multi-agonist peptides currently under active pharmaceutical investigation."
    },
    "KLOW": {
        title: "KLOW (80MG)",
        classification: "Research compound",
        form: "Lyophilized powder",
        description: "High-concentration research compound. For use in controlled laboratory environments. Analytical and in-vitro research use only."
    },
    "Tesamorelin": {
        title: "TESAMORELIN (5MG / 10MG)",
        classification: "Synthetic GHRH analogue",
        form: "Lyophilized powder",
        description: "Tesamorelin is a stabilised synthetic analogue of Growth Hormone-Releasing Hormone (GHRH). It mimics the endogenous GHRH peptide sequence and is studied for its interaction with pituitary somatotroph receptors in controlled research settings."
    },
    "TB-500": {
        title: "TB-500 (10MG)",
        classification: "Thymosin Beta-4 synthetic analogue",
        form: "Lyophilized powder",
        description: "TB-500 is a synthetic version of the naturally occurring peptide Thymosin Beta-4, which plays a role in actin regulation and cellular signalling pathways. Widely studied in laboratory models for its interaction with tissue remodelling mechanisms."
    },
    "GHK-Cu": {
        title: "GHK-CU (100MG / 50MG)",
        classification: "Copper peptide tripeptide complex",
        form: "Lyophilized powder",
        description: "GHK-Cu (Glycyl-L-Histidyl-L-Lysine : Copper) is a naturally occurring copper complex studied for its role in cellular signalling, extracellular matrix interactions, and gene expression modulation in laboratory settings. One of the most researched tripeptides in analytical chemistry."
    },
    "BPC-157": {
        title: "BPC-157 (10MG)",
        classification: "Pentadecapeptide — gastric origin",
        form: "Lyophilized powder",
        description: "BPC-157 (Body Protection Compound 157) is a 15-amino acid sequence derived from a protein found in gastric juice. Extensively studied in laboratory models for its interactions with growth factor signalling and angiogenesis pathways."
    },
    "KPV": {
        title: "KPV (10MG)",
        classification: "Alpha-MSH derived tripeptide",
        form: "Lyophilized powder",
        description: "KPV is a C-terminal tripeptide (Lys-Pro-Val) derived from alpha-melanocyte-stimulating hormone (α-MSH). Studied in research settings for its interactions with melanocortin receptors and intracellular signalling pathways."
    },
    "MOTS-C": {
        title: "MOTS-C (10MG / 40MG)",
        classification: "Mitochondrial-derived peptide",
        form: "Lyophilized powder",
        description: "MOTS-C is a peptide encoded within the mitochondrial genome — one of the few known mitochondrial-derived peptides (MDPs). Studied for its role in mitochondrial signalling, AMPK pathway interaction, and metabolic regulation at the cellular level."
    },
    "SLU-PP-332": {
        title: "SLU-PP-332 (5MG)",
        classification: "ERR pan-agonist (ERRα / ERRβ / ERRγ)",
        form: "Lyophilized powder",
        description: "SLU-PP-332 is a small molecule pan-agonist targeting the estrogen-related receptor family. Studied for its role in mitochondrial biogenesis and oxidative metabolism pathways at the cellular level."
    },
    "Epithalon": {
        title: "EPITHALON (10MG)",
        classification: "Synthetic tetrapeptide — pineal origin",
        form: "Lyophilized powder",
        description: "Epithalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide studied for its interaction with telomerase activity and chromosomal telomere length in laboratory models. Derived from the naturally occurring polypeptide Epithalamin, isolated from the pineal gland."
    },
    "Ipamorelin": {
        title: "IPAMORELIN (10MG)",
        classification: "Selective GHRP — ghrelin receptor agonist",
        form: "Lyophilized powder",
        description: "Ipamorelin is a pentapeptide and selective ghrelin receptor agonist. Studied for its highly selective stimulation of growth hormone release in pituitary cell research, with noted selectivity compared to other GHRPs."
    },
    "CJC-1295 (No DAC)": {
        title: "CJC-1295 NO DAC (5MG / 10MG)",
        classification: "Modified GHRH analogue (MOD GRF 1-29)",
        form: "Lyophilized powder",
        description: "CJC-1295 without DAC is a modified 29-amino acid analogue of endogenous GHRH. Studied for its interaction with GHRH receptors in pituitary research models. The No DAC formulation has a shorter active window, useful for pulse-pattern research protocols."
    },
    "Semax": {
        title: "SEMAX (10MG)",
        classification: "Synthetic ACTH-derived neuropeptide",
        form: "Lyophilized powder",
        description: "Semax is a heptapeptide analogue derived from the ACTH(4-7) sequence. Studied for its interactions with neurotrophin systems, particularly BDNF (Brain-Derived Neurotrophic Factor) expression pathways in neurological research models."
    },
    "Selank": {
        title: "SELANK (10MG)",
        classification: "Synthetic peptide — tuftsin derivative",
        form: "Lyophilized powder",
        description: "Selank is a synthetic heptapeptide analogue of the endogenous tetrapeptide Tuftsin (Thr-Lys-Pro-Arg). Studied for its interactions with GABAergic and serotonergic systems in neuroscience research models."
    },
    "BAC Water (Imported)": {
        title: "BAC WATER — IMPORTED (10ML / 3ML)",
        classification: "Bacteriostatic Water",
        form: "Sterile aqueous solution",
        description: "Bacteriostatic Water for Injection, USP. Contains 0.9% benzyl alcohol as a preservative. Standard reconstitution medium for lyophilized research peptides. Imported pharmaceutical grade."
    },
    "BAC Indian Ampule": {
        title: "BAC WATER — INDIAN AMPULE (10ML)",
        classification: "Bacteriostatic Water — single-use ampule",
        form: "Sterile aqueous solution",
        description: "Single-use sterile ampule format. Suitable for reconstitution of lyophilized compounds in laboratory settings. Indian pharmaceutical grade manufacture."
    }
};

// Inject Modal HTML if it doesn't exist
if (!document.getElementById('details-modal')) {
    const modalHTML = `
    <div id="details-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300">
        <div id="details-modal-content" class="bg-[#08090D] border border-primary-container/30 w-full max-w-2xl mx-4 p-8 relative transform scale-95 transition-transform duration-300 shadow-2xl">
            <button onclick="closeDetailsModal()" class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
                <span class="material-symbols-outlined">close</span>
            </button>
            <h2 id="modal-title" class="font-hero-h1 text-[32px] md:text-[40px] text-white leading-none mb-3 tracking-wide"></h2>
            <div class="font-label-mono text-[#00E5FF] text-[11px] md:text-[12px] mb-6 tracking-widest uppercase flex flex-col gap-1.5">
                <div>Classification: <span id="modal-classification" class="text-white/80"></span></div>
                <div>Form: <span id="modal-form" class="text-white/80"></span></div>
            </div>
            <div class="font-body-main text-outline-variant text-[14px] md:text-[16px] leading-relaxed mb-8">
                <p id="modal-description"></p>
            </div>
            <div class="font-label-mono text-white/40 text-[10px] md:text-[11px] uppercase italic border-t border-white/10 pt-4">
                For in-vitro and analytical research purposes only. Not for human consumption.
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function openDetailsModal(productName) {
    let key = productName;
    // Map catalog names to details map names if needed
    if (!productDetailsMap[key]) {
        // Find exact or partial match
        const foundKey = Object.keys(productDetailsMap).find(k => productName.includes(k) || k.includes(productName));
        if (foundKey) key = foundKey;
    }

    const details = productDetailsMap[key];
    if (details) {
        document.getElementById('modal-title').textContent = details.title;
        document.getElementById('modal-classification').textContent = details.classification;
        document.getElementById('modal-form').textContent = details.form;
        document.getElementById('modal-description').textContent = details.description;

        const modal = document.getElementById('details-modal');
        const modalContent = document.getElementById('details-modal-content');

        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }
}

function closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    const modalContent = document.getElementById('details-modal-content');

    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
}

// Close on outside click and escape key
document.addEventListener('click', (e) => {
    const modal = document.getElementById('details-modal');
    if (e.target === modal) {
        closeDetailsModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('details-modal');
        if (modal && !modal.classList.contains('opacity-0')) {
            closeDetailsModal();
        }
    }
});
