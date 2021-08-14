//
//  DueDateView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct DueDateView: View {
    var body: some View {
        VStack(){
            Text("Due Aug. 15")
                .padding(.all, 10)
        }
        .background(Color.red)
        .border(Color.black, width: 4)
        .cornerRadius(8)
    }
}

struct DueDateView_Previews: PreviewProvider {
    static var previews: some View {
        DueDateView()
            .previewLayout(.sizeThatFits)
    }
}
